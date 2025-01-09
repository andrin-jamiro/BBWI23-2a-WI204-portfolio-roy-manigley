import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { CV } from '../../models/cv';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CVComponent implements OnInit {

  cvs: CV[] = [];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadCVs();
  }

  loadCVs(): void {
    this.route.data.pipe(
      map(data => data['records']),
      tap((cvs: CV[]) => cvs.sort((a, b) => (b.end ?? Infinity) - (a.end ?? Infinity)))
    ).subscribe(cvs => this.cvs = cvs);
  }
}
