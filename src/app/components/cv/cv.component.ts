import { Component, OnInit } from '@angular/core';
import { CV } from '../../models/cv';
import { CVService } from '../../services/cv.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CVComponent implements OnInit {
  cvs: CV[] = [];
  constructor(
    private cvService: CVService
  ) {
  }
  ngOnInit(): void {
    this.cvs = this.cvService.getCVs()
    this.cvs.sort((a, b) => (b.end ?? Infinity) - (a.end ?? Infinity))
  }
}
