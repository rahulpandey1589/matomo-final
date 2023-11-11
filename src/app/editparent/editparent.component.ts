import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editparent',
  templateUrl: './editparent.component.html',
  styleUrls: ['./editparent.component.css']
})
export class EditparentComponent {

     parentId: any = "";
     employeeId: any="";

    constructor(private activatedRoute : ActivatedRoute){
       this.parentId = this.activatedRoute.snapshot.paramMap.get("parentId");
       this.employeeId = this.activatedRoute.snapshot.queryParamMap.get("employeeId");

       let message= `The parent is is ${this.parentId} abd employeeId is ${this.employeeId}`;
    }
}
