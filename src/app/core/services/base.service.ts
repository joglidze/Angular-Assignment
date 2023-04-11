import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  get<T>(url: string, params = {}): Observable<T> {
    return this.http.get<T>(this.apiUrl + url, {
      params: params,
    });
  }


  
}
