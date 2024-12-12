import { Component, OnInit } from '@angular/core';
import { CV } from '../../models/cv';
import { CVService } from '../../services/cv.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CVComponent implements OnInit {

  cvs: CV[] = [];

  constructor(
    private cvService: CVService
  ) {}

  ngOnInit(): void {
    this.loadCVs();
  }

  loadCVs(): void {
    this.cvService.getCVs().pipe(
      tap(cvs => cvs.sort((a, b) => (b.end ?? Infinity) - (a.end ?? Infinity)))
    ).subscribe(cvs => this.cvs = cvs);
  }
}
