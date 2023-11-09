import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DatapassingService } from './datapassing.service';
import { DirectivesexampleComponent } from './directivesexample/directivesexample.component';
import { HoverOverDirective } from './directives/hover-over.directive';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AdminComponent } from './admin/admin.component';
import { ResetUserComponent } from './admin/reset-user/reset-user.component';
import { DisableUserComponent } from './admin/disable-user/disable-user.component';
import { EditparentComponent } from './editparent/editparent.component';
import { DatafetchComponent } from './datafetch/datafetch.component';
import { MyCustomPipePipe } from './pipes/my-custom-pipe.pipe';
import { SquarePipe } from './pipes/square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DirectivesexampleComponent,
    HoverOverDirective,
    EmployeeComponent,
    DepartmentComponent,
    NotFoundComponent,
    HomecomponentComponent,
    AdminComponent,
    ResetUserComponent,
    DisableUserComponent,
    EditparentComponent,
    DatafetchComponent,
    MyCustomPipePipe,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatapassingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
