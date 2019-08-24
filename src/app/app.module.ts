import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MajorComponent } from './major/major.component';
import { StudentComponent } from './student/student.component';
import { MajordetailComponent } from './majordetail/majordetail.component';
import {HttpClientModule} from '@angular/common/http';
import { MajoraddComponent } from './majoradd/majoradd.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MajorComponent,
    StudentComponent,
    MajordetailComponent,
    MajoraddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
