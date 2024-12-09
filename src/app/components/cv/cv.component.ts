import { Component, OnInit } from '@angular/core';
import { CV } from '../../models/cv';
import { CVService } from '../../services/cv.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CVComponent implements OnInit {

  cvs: CV[] = [];
  formGroup?: FormGroup;

  constructor(private cvService: CVService) {
  }

  ngOnInit(): void {
    this.loadCVs();
  }

  select(cv?: CV): void {
    this.formGroup = new FormGroup({
      employer: new FormControl(cv?.employer ?? null, [Validators.required]),
      start: new FormControl(cv?.start ?? null, [Validators.required]),
      end: new FormControl(cv?.end ?? null, []),
    });
    if (cv?.id) {
      this.formGroup.addControl('id', new FormControl(cv?.id ?? null, []))
    }
  }

  loadCVs(): void {
    this.cvService.getCVs().pipe(
      tap(cvs => cvs.sort((a, b) => (b.end ?? Infinity) - (a.end ?? Infinity)))
    ).subscribe(cvs => this.cvs = cvs);
  }

  saveCV(): void {
    if (this.formGroup?.valid) {
      let observable = null;
      if (this.formGroup.value.id) {
        observable = this.cvService.updateCV(this.formGroup.value.id, this.formGroup.value);
      } else {
        observable = this.cvService.createCV(this.formGroup.value);
      }
      observable.subscribe(() => this.loadCVs());
    } else {
      alert('CV is invalid');
    }
  }

  deleteCV(id: string): void {
    if (id) {
      const confirmedDelete = confirm('do you realy whant to delet the CV entry?');
      if (confirmedDelete) {
        this.cvService.deleteCV(id).subscribe(() => this.loadCVs());
      }
    } else {
      alert('the passed ID is not defined');
    }
  }
}
