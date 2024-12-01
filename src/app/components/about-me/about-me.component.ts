import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../../services/about-me.service';
import { AboutMe } from '../../models/about-me';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  public aboutMe?: AboutMe;
  constructor(
    private aboutMeService: AboutMeService
  ) {
  }
  ngOnInit(): void {
    this.aboutMe = this.aboutMeService.getAboutMe()
  }
}
