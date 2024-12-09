import { Injectable } from '@angular/core';
import { CV } from '../models/cv';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CVService {

  constructor(
    private http: HttpClient
  ) { }

  getCVs(): Observable<CV[]> {
    return this.http.get<CV[]>('/api/cvs/');
  }

  createCV(cv: CV): Observable<CV> {
    return this.http.post<CV>(`/api/cvs/`, cv);
  }

  updateCV(id: string, cv: CV): Observable<CV> {
    return this.http.put<CV>(`/api/cvs/${id}/`, cv);
  }

  deleteCV(id: string): Observable<void> {
    return this.http.delete<void>(`/api/cvs/${id}/`);
  }
}
