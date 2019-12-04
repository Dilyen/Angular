import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
   project = {id : 1, name : 'TCMS 1.0.0', description: 'Turntabl Client Management System 1.0.0'};


  constructor() { }

  ngOnInit() {
  }

}
