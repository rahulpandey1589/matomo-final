import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { DirectivesexampleComponent } from './directivesexample/directivesexample.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AdminComponent } from './admin/admin.component';
import { ResetUserComponent } from './admin/reset-user/reset-user.component';
import { DisableUserComponent } from './admin/disable-user/disable-user.component';
import { EditparentComponent } from './editparent/editparent.component';
import { DatafetchComponent } from './datafetch/datafetch.component';

const routes: Routes = [
  { path: '', component: HomecomponentComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'parent/:parentId', component: EditparentComponent },
  { path: 'directive', component: DirectivesexampleComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'reset-user', component: ResetUserComponent },
      { path: 'disable-user', component: DisableUserComponent }
    ]
  },
  {path:'fetch', component:DatafetchComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
