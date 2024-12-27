import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CV } from '../../models/cv';
import { CVService } from '../cv.service';

@Injectable({
  providedIn: 'root'
})
export class CvListResolverService implements Resolve<CV[]> {

  constructor(
    private cvService: CVService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CV[]> {
    return this.cvService.getCVs()
  }
}
