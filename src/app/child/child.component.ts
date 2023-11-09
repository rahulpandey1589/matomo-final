import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 @Input() valueFromParent? :string;

 @Output() childToParent = new EventEmitter<string>();
 childText? :string;


 onButtonClick(){
  this.childToParent.emit(this.childText);
 }


}


