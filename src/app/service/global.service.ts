import { Injectable } from '@angular/core';
import { TOP_LEAGUES } from 'app/constant/app-enum';
import { Standing } from 'app/model/league-standing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  cacheStore: { [key: number]: Observable<Standing> } = {};
  currentLeague = TOP_LEAGUES.ENGLAND;
  isLoading = false;

  constructor() { }

}
