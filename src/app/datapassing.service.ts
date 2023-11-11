import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { EmployeeList } from 'src/models/employee-list';

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


  fetchAllUsers(): Observable<EmployeeList>{
    let url='https://reqres.in/api/users?page=2'
    return this.httpClient.get<EmployeeList>(url);
  }


}
