import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalComponent } from './personal/personal.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EmploymentComponent } from './employment/employment.component';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
    FooterComponent,
    PersonalComponent,
    EmploymentComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
