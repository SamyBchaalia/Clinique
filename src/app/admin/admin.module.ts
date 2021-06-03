import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DotorsComponent } from './dotors/dotors.component';
import { SecretarysComponent } from './secretarys/secretarys.component';
import { StockComponent } from './stock/stock.component';
import { PaimentsComponent } from './paiments/paiments.component';
import { PatientsComponent } from './patients/patients.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { DoctorsChildComponent } from './dotors/doctors-child/doctors-child.component';





@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DotorsComponent,
    SecretarysComponent,
    StockComponent,
    PaimentsComponent,
    PatientsComponent,
    SettingsComponent,
    DoctorsChildComponent,
  
  ],
  imports: [
    CommonModule,AdminRoutingModule,MaterialModule,FormsModule,ReactiveFormsModule,HttpClientModule]
})
export class AdminModule { }
