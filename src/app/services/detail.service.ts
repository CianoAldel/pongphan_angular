import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Detail } from '../Interface/Detail';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DetailService {
  clientUrl: string = 'https://localhost:7088';

  constructor(private http: HttpClient) {}

  saveDetail(details: Detail) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(details);

    this.http
      .post<{ details: Detail }>(
        this.clientUrl + '/api/PongphanDetail/',
        body,
        {
          headers: headers,
        }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
