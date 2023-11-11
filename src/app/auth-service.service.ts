import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 isAdmin = false;

  constructor() { }


   isAdminUser() : boolean{
    // simulating a process of passing username and password in database and validating it
     this.isAdmin = true;;
     return this.isAdmin;
   }

}
