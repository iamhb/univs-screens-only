import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.scss']
})
export class TransportListComponent implements OnInit {

  transportlistObj = {
    searchRoute: "",
    searchcarNumber: "",
    searchPhone: "",
  }

  constructor() { }

  ngOnInit() {
  }
}
