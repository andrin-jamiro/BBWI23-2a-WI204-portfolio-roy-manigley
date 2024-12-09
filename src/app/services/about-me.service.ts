import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  constructor(
    private http: HttpClient
  ) { }

  getAboutMe(): Observable<AboutMe> {
    return this.http.get<AboutMe>('/api/about-me/detail/');
  }

  updateAboutMe(name: string): Observable<AboutMe> {
    return this.http.patch<AboutMe>('/api/about-me/detail/', { name });
  }
}
