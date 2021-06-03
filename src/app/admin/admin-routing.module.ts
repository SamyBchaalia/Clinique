import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsChildComponent } from './dotors/doctors-child/doctors-child.component';
import { DotorsComponent } from './dotors/dotors.component';
import { PatientsComponent } from './patients/patients.component';
import { SecretarysComponent } from './secretarys/secretarys.component';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'doctors',
        component: DotorsComponent
        
      },
      {
        path: 'boxs',
        component: SecretarysComponent
        
      },
      {
        path: 'testing',
        component: DoctorsChildComponent
        
      },
      
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
