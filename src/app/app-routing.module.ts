import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MajorComponent} from './major/major.component';
import {StudentComponent} from './student/student.component';
import {MajordetailComponent} from './majordetail/majordetail.component';
import {MajoraddComponent} from './majoradd/majoradd.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'majors', component: MajorComponent},
  {path: 'add', component: MajoraddComponent},
  {path: 'students', component: StudentComponent},
  {path: 'majors/:id', component: MajordetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
