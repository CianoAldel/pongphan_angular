import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Detail } from '../Interface/Detail';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Province } from '../Interface/Province';
import { District } from '../Interface/District';
@Injectable({
  providedIn: 'root',
})
export class DetailService {
  clientUrl: string = 'https://localhost:7088';

  constructor(private http: HttpClient) {}

  saveDetail(details: Detail) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(details);

    console.log('service details', body);

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

  editDetail(details: Detail) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(details);

    this.http
      .put<{ details: Detail }>(this.clientUrl + '/api/PongphanDetail/', body, {
        headers: headers,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  deleteDetail(id: number) {
    this.http
      .delete(this.clientUrl + '/api/PongphanDetail/' + id)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getProvince(): Observable<Province[]> {
    const url = 'https://localhost:7088/api/PongphanDetail/GetProvince';

    return this.http.get<Province[]>(url);
  }

  getDistrict(): Observable<District> {
    const url = 'https://localhost:7088/api/PongphanDetail/GetDistrict';

    return this.http.get<District>(url);
  }
}
