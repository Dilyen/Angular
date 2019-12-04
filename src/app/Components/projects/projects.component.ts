import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {id : 1, name : 'TCMS 1.0.0', description: 'Turntabl Client Management System 1.0.0'},
    {id : 2, name : 'Project Management System', description: 'Project Management System To Add to TCMS'},
    {id : 3, name : 'H2 Database', description: 'Populating all Database for TCMS locally'}
 ];   

  constructor() {}

  ngOnInit() {
  }

}
