import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) {

   }
   getAll(baseUrl):any {
    return this.http.get(baseUrl);
  }

  //get(id) {
    //return this.http.get(`${baseUrl}/${id}`);
  //}


}
