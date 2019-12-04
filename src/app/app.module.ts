import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { MainComponent } from './Components/main/main.component';
import { NewprojectComponent } from './Components/newproject/newproject.component';
import { ClientDetailsComponent } from './Components/client-details/client-details.component';
import { NewclientComponent } from './Components/newclient/newclient.component';
import { ReportingComponent } from './Components/reporting/reporting.component';
import { ProjectDetailsComponent } from './Components/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ClientsComponent,
    ProjectsComponent,
    MainComponent,
    NewprojectComponent,
    ClientDetailsComponent,
    NewclientComponent,
    ReportingComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
