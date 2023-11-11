import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ManageAccessComponent } from './manage-access/manage-access.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponentComponent
  },
  {
    path: 'dashboard', component: DashboardComponentComponent
  },
  {
    path: 'manage-access', component: ManageAccessComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
