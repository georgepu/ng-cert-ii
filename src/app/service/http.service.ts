import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstant } from 'app/constant/app-constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get<T>(
    params: HttpParams,
    endpoint: string,
    options?: { redirect: string }
  ): Observable<T> {
    const url = AppConstant.BASE_API_URL + endpoint,
      headers = new HttpHeaders()
        .append('x-rapidapi-key', AppConstant.API_KEY)
        .append('x-rapidapi-host', AppConstant.HOST);
    return this.httpClient.get(url, {
      params: params,
      headers: headers,
      ...options,
    }) as Observable<T>;
  }
}
