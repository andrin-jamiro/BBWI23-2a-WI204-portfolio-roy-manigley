import { Component, OnInit } from '@angular/core';
import { CVService } from '../../../services/cv.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { CV } from '../../../models/cv';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent implements OnInit {

  cv?: CV;

  constructor(
    private cvService: CVService,
    private route: ActivatedRoute,
  ) {} 

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      mergeMap(id => this.cvService.getCVById(id!))
    ).subscribe(value => {
      this.cv = value;
    });
  }

  delete(): void {
    this.cvService.deleteCV(this.cv!.id!).subscribe(() => this.back());
  }

  back(): void{
    history.back();
  } 
}
