import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { CreateUpdateComponent } from '../../components/cv/create-update/create-update.component';

@Injectable({
  providedIn: 'root'
})
export class HasChangesGuardService implements CanDeactivate<CreateUpdateComponent> {

  constructor() { }

  canDeactivate(
    component: CreateUpdateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): boolean {
      if(!!component.formGroup?.touched) {
        return confirm('you have unsaved changes, do you want to discard them?')
      } else {
        return true
      }
    } 
}
