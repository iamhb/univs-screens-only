import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl = "http://localhost:3000"


  public insertUrl = this.baseUrl + "/user/insert"


  public transportUrl = this.baseUrl + "/user/transportinsert"

  
  constructor(public http: HttpClient) { }
  insert(classrouteObj) {
    return this.http.post<any>(this.insertUrl, classrouteObj)
  }

  inserttransport(transportObj) {
    return this.http.post<any>(this.transportUrl, transportObj)
  }




}
