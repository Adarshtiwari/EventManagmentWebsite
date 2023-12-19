import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {getALLEventData,eventRequest} from '../Constant'

@Injectable({
  providedIn: 'root'
})
export class APIcallService {

  constructor(private http: HttpClient) { }


  fetchALLEventDataData(): Observable<any> {
    return this.http.get(getALLEventData);
  }

  eventRequest(data:any):Observable<any>{
    console.log(" api calling for create event ")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // Include this if you need authorization
    });
    return this.http.post<any>(eventRequest, data);
  }
  


}
