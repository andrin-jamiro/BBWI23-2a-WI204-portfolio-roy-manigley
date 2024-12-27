import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { CV } from '../../models/cv';
import { CVService } from '../cv.service';

@Injectable({
  providedIn: 'root'
})
export class CvDetailResolverService implements Resolve<CV|null> {

  constructor(
    private cvService: CVService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CV|null> {
    const id = route.paramMap.get('id')
    if (!!id) {
      return this.cvService.getCVById(id).pipe(
        tap(record => {
          if (!record) this.router.navigate(['404'])
        })
      )
    } else{
      this.router.navigate(['404'])
      return of(null)
    }
  }
}
