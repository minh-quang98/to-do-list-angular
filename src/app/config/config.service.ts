import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  postData(url: string, body: any): Observable<any> {
    return this.http.post<any>(url, body);
  }
}
