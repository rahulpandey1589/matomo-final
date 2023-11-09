import { Component, inject } from '@angular/core';
import { DatapassingService } from '../datapassing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  fullName?: string;
  valueFromChild?: string;
  displayH1?: boolean;
  disableButton?: boolean;
  colorName = ['Red', 'Green', 'Yellow', 'Orange', 'Purple', 'Voilet'];



  constructor(
    private _dataPassing: DatapassingService,

    private router: Router) {
   
    this.disableButton = true;
    setTimeout(() => {
      this.displayH1 = true;
    }, 5000);
  }

  passValueToChildClick() {
    let value = this._dataPassing.passData();

    this.fullName = "I am passing data to child component";
  }

  processDataFromChildComponent(childData: string) {
    this.valueFromChild = childData;
  }


  navigateToEditParentComponent() {
    this.router.navigate(['/parent/1'], { queryParams: { 'employeeId': 11 } });
  }
}

