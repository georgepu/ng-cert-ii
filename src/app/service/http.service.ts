import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstant } from 'app/constant/app-constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(params: any, endpoint: string, options?: any): Observable<any> {
    const url = AppConstant.BASE_API_URL + endpoint,
      headers = new Headers();
    headers.append('x-rapidapi-key', AppConstant.API_KEY);
    headers.append('x-rapidapi-host', AppConstant.HOST);
    return this.httpClient.get(url, {
      params: params,
      headers: headers,
      ...options
    });
  }
}
