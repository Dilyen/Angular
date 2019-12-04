import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  //tslint:disable-next-line: no-inferrable-types;
  apiURL: string = ' https://mysterious-peak-14776.herokuapp.com/client';
  clients: object;


  constructor() { }

  ngOnInit() {
  }

}
