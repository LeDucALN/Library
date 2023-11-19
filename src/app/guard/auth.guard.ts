import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  Router,
  CanActivate,
  UrlTree,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Observable } from 'rxjs';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isUserLoggedIn()) {
    return true;
  }

  return router.parseUrl('/');
};

// export class AuthGuard implements CanActivate {
//   constructor(
//     private router: Router,
//     private authService: AuthenticationService
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | boolean
//     | UrlTree
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree> {
//     if (this.authService.isUserLoggedIn()) {
//       return true;
//     }

//     return this.router.parseUrl('/');
//   }
// }
