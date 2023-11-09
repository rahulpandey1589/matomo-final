import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserObject } from 'src/models/user-model';
import { DatapassingService } from '../datapassing.service';

@Component({
  selector: 'app-datafetch',
  templateUrl: './datafetch.component.html',
  styleUrls: ['./datafetch.component.css']
})
export class DatafetchComponent {


  title = 'hello-world';
  userObject? : UserObject;
  userId: string= "";

  constructor(private dataPassingService: DatapassingService){

  }


  fetchData(){
    this.dataPassingService.getUser(parseInt(this.userId)).subscribe(((data:UserObject) =>{
       this.userObject = data;
       this.userObject.data.salary = 4;
    }),
    error =>{
          console.error('API Not respoding');
    });
  }


}
