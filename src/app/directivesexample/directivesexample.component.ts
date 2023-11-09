import { Component } from '@angular/core';

@Component({
  selector: 'app-directivesexample',
  templateUrl: './directivesexample.component.html',
  styleUrls: ['./directivesexample.component.css']
})
export class DirectivesexampleComponent {
  
  displayFirstNameSection : boolean = true;

  colorName = [] = ["Red","Green","Yellow","Orange","Purple"]



  constructor(){
    // setTimeout(() => {
    //   this.displayFirstNameSection = false;
    // }, 10000);

  }

}
