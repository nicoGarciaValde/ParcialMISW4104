import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';

import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CafeService {

  public apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

  getCafe(): Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.apiUrl)
  }

}
