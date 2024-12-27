import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CV } from '../../../models/cv';
import { CVService } from '../../../services/cv.service';

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
    this.route.data.pipe(
      map(data => data['record']),
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
