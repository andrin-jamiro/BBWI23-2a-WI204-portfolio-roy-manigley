import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';
@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  constructor() { }
  getAboutMe(): AboutMe {
    return new AboutMe('royman', '/assets/profile.jfif');
  }
}

