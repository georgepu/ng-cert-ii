import { Injectable } from '@angular/core';
import { TOP_LEAGUES } from 'app/constant/app-enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  cacheStore: { [key: number]: Observable<any> } = {};
  currentLeague = TOP_LEAGUES.ENGLAND;

  constructor() { }

}
