import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {


transportObj = {
routeNames   :"",
vehicleNumber:null,
driverNames  :"",
licenseNumber:null,
phoneNumber  :null


}

  constructor( public api:ApiService) { }

  ngOnInit() {
  }
transportForm(){
  
  console.log(this.transportObj)
  this.api.inserttransport(this.transportObj).subscribe((data: any) => {
    console.log(data)
  })

}

reset(){

  this.transportObj = {
    routeNames: "",
    vehicleNumber: null,
    driverNames: "",
    licenseNumber: null,
    phoneNumber: null


  }


}



}
