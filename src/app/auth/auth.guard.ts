import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated() == true){
      return true
    }
    this.router.navigate(['/login']);
  }
  // this.router.navigate(['/login']);

  constructor(private authService: AuthService, private router: Router) {}
}
