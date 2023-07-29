import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // console.dir(next);
    // console.dir(state);
    let result: boolean;
    if (localStorage.getItem('isLoggedIn')) {
      localStorage.setItem('hasHomePermission', 'Yes');
      localStorage.setItem('hasAboutPermission', 'Yes');
      localStorage.setItem('hasAboutCompanyPermission', 'Yes');
      localStorage.setItem('hasContactPermission', 'Yes');
      switch (next.data.name) {
        case 'home':
          result = Boolean(localStorage.getItem('hasHomePermission') === 'Yes');
          break;
        case 'about':
          result = Boolean(
            localStorage.getItem('hasAboutPermission') === 'Yes'
          );
          break;
        case 'about/company':
          result = Boolean(
            localStorage.getItem('hasAboutCompanyPermission') === 'Yes'
          );
          break;
        case 'contact':
          result = Boolean(
            localStorage.getItem('hasContactPermission') === 'Yes'
          );
          break;
        default:
          result = true;
          break;
      }
    } else {
      result = false;
      this.router.navigate(['/login']);
      // window.location.href =
      //('https://lazy-loading-implementation.stackblitz.io/home');
    }
    return result;
  }
}
