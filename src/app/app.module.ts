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
import { EditparentComponent } from './editparent/editparent.component';
import { DatafetchComponent } from './datafetch/datafetch.component';
import { MyCustomPipePipe } from './pipes/my-custom-pipe.pipe';
import { SquarePipe } from './pipes/square.pipe';
import { AdminModule } from './admin/admin.module';
import { FetchMultipleComponent } from './fetch-multiple/fetch-multiple.component';

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
    EditparentComponent,
    DatafetchComponent,
    MyCustomPipePipe,
    SquarePipe,
    FetchMultipleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [DatapassingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
