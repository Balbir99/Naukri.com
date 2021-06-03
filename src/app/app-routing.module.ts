import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { PersonalComponent } from './personal/personal.component';


const routes: Routes = [

  { path:"personal", pathMatch:'full',  component:PersonalComponent},
  { path: "employment",pathMatch:'full', component: EmploymentComponent },
  // {path:"", redirectTo:"/personal", pathMatch:"full"},
  { path: "education",pathMatch:'full', component: EducationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
