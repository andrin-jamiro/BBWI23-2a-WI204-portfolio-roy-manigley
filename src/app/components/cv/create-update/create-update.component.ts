import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CVService } from '../../../services/cv.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, of } from 'rxjs';
import { CV } from '../../../models/cv';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrl: './create-update.component.scss'
})
export class CreateUpdateComponent implements OnInit {

  formGroup?: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private cvService: CVService,
  ){} 

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      mergeMap(id => {
        if (!id){
          return of(null);
        } else {
          return this.cvService.getCVById(id!)  
        } 
      })
    ).subscribe(cv => this.initForm(cv))
  }

  initForm(cv: CV| null): void{
    this.formGroup = new FormGroup({
      employer: new FormControl(cv?.employer ?? null, [Validators.required]),
      start: new FormControl(cv?.start ?? null, [Validators.required]),
      end: new FormControl(cv?.end ?? null, []),
    });
    if (cv?.id) {
      this.formGroup.addControl('id', new FormControl(cv?.id ?? null, []))
    }
  } 

  saveCV(): void {
    if (this.formGroup?.valid) {
      let observable = null;
      if (this.formGroup.value.id) {
        observable = this.cvService.updateCV(this.formGroup.value.id, this.formGroup.value);
      } else {
        observable = this.cvService.createCV(this.formGroup.value);
      }
      observable.subscribe(() => history.back());
    } else {
      alert('CV is invalid');
    }
  }
}
