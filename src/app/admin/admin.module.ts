import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ManageAccessComponent } from './manage-access/manage-access.component';

@NgModule({
  declarations: [
    DashboardComponentComponent,
    ManageAccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
