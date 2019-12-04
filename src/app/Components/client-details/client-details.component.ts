import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  customer = { id : 1, name: 'Doreen Doodo', address: 'Lapaz', telephoneNumber: '0505092133', email: 'doreen@gmail.com' };

  constructor() { }

  ngOnInit() {
  }

}
