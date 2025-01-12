import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../../services/about-me.service';
import { AboutMe } from '../../models/about-me';
import { NgForm } from '@angular/forms';
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
    this.aboutMeService.getAboutMe().subscribe(aboutMe => this.aboutMe = aboutMe)
  }

  submit(form: NgForm): void {
    if (form.valid) {
      this.aboutMeService.updateAboutMe(form.value.name).subscribe(
        aboutMe => this.aboutMe!.name = aboutMe.name,
        error => {
          console.error(error);
          alert('An error occurred while updating about me');
        }
      );
    } else {
      alert('The name is not valid');
    }
  }

}
