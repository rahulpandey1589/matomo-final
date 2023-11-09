import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';
import { DatapassingService } from './datapassing.service';
import { Observable } from 'rxjs';
import { UserObject } from 'src/models/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'hello-world';
  userObject? : UserObject;
  userId: string= "";

  constructor(private dataPassingService: DatapassingService){

  }



  ngOnInit(): void {
  }

  fetchData(){
    this.dataPassingService.getUser(parseInt(this.userId)).subscribe(((data:UserObject) =>{
       this.userObject = data;
    }),
    error =>{
          console.error('API Not respoding');
    });
  }


}

// promise

//observable


// Data Types Available in Typescript

// var vs let
//number 
// string
// boolean
//
// Parent Component ====== Child Component

// Parent to Child  ---- Input
// CHild to Parent --- Output/Event Emitter
// using services
