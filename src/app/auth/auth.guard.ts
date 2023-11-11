import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import {  inject } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';




export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthServiceService);

  if(authService.isAdminUser()){
    return true;
  }
  return false;
};



// export const authGuard: CanActivateFn = (route, state) => {
 
//    /*
//         Inject Auth Service
//         Return True or False depending upon response from Auth Service
//    */
//   return false;
// };
