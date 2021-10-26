import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http:HttpClient) { }


  getPoint():Observable<any>{


      return this.http.get<any>('https://run.mocky.io/v3/5c9ca0fa-e6cc-40ff-986d-067ab9d4b2c3')
  }

}
