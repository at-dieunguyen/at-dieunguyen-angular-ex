import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileComponent } from './profile.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateProfile implements CanDeactivate<ProfileComponent> {
  constructor() { }

  canDeactivate(
    component: ProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(component);
    if (component.isTyping) {
      return confirm('chuyen trang la mat du lieu');
    }
    return true;
  }
}
