import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { NewclientComponent } from './Components/newclient/newclient.component';
import { NewprojectComponent } from './Components/newproject/newproject.component';
import { ProjectDetailsComponent } from './Components/project-details/project-details.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ReportingComponent } from './Components/reporting/reporting.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { ClientDetailsComponent } from './Components/client-details/client-details.component';


const routes: Routes = [
  {path:'main', component:MainComponent},
  {path:'newclient', component:NewclientComponent},
  {path:'newproject', component:NewprojectComponent},
  {path:'project-details', component:ProjectDetailsComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'reporting', component:ReportingComponent},
  {path:'clients', component:ClientsComponent},
  {path:'client-details', component:ClientDetailsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
