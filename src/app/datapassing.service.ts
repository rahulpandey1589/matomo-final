import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserObject } from 'src/models/user-model';


@Injectable({
  providedIn: 'root'
})
export class DatapassingService {


  constructor(private httpClient: HttpClient) { }

  passData(): string {
    return "I am passing data via service";
  }


  getUser(userId: number): Observable<UserObject> {

    let url = `https://reqres.in/api/users/${userId}`;

    return this.httpClient.get<UserObject>(url);
  }


}
