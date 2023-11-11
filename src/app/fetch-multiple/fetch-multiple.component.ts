import { Component, OnInit } from '@angular/core';
import { DatapassingService } from '../datapassing.service';
import { Daum, EmployeeList } from 'src/models/employee-list';

@Component({
  selector: 'app-fetch-multiple',
  templateUrl: './fetch-multiple.component.html',
  styleUrls: ['./fetch-multiple.component.css']
})
export class FetchMultipleComponent implements OnInit {

   employeeList: Daum[] = [];  


  constructor(private datService: DatapassingService){

  }

  ngOnInit(): void {
      this.datService.fetchAllUsers().subscribe((data:EmployeeList) =>{
         this.employeeList = data.data;
         console.log(this.employeeList);
      });
  }
}
