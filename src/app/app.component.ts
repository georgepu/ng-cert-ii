import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './service/http.service';
import { HttpParams } from '@angular/common/http';
import { AppConstant, NAV_ITEMS } from './constant/app-constant';
import { Router } from '@angular/router';
import { GlobalService } from './service/global.service';
import {
  Observable,
  Subject,
  catchError,
  of,
  shareReplay,
  takeUntil,
  throwError,
} from 'rxjs';
import { LeagueStandingComponent } from './component/league-standing/league-standing.component';
import { NavItem } from './model/app-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LeagueStandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _onDestroy$: Subject<void> = new Subject();
  navItems = structuredClone(NAV_ITEMS);
  get isLoading() {
    return this.globalService.isLoading;
  }

  constructor(
    private globalService: GlobalService,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnDestroy() {
    this._onDestroy$.next();
  }

  ngOnInit() {
    this.navItems.forEach((item) => {
      const params = new HttpParams()
          .append('league', item.league_id)
          .append('season', AppConstant.CURRENT_SEASON),
        options = {
          redirect: 'follow',
        };
      this.globalService.cacheStore[item.league_id] = this.httpService
        .get(params, 'standings', options)
        .pipe(shareReplay(1));
    });
    this.navigateLeague(this.navItems[0]);
  }

  onClickLeague(item: NavItem) {
    if (!item.active) {
      this.navItems.map((i) => {
        if (i.league_id === item.league_id) {
          i.active = true;
          this.globalService.currentLeague = i.league_id;
        } else {
          i.active = false;
        }
        return i;
      });
      this.navigateLeague(item);
    }
  }

  navigateLeague(item: NavItem) {
    this.globalService.isLoading = true;
    this.globalService.cacheStore[item.league_id]
      .pipe(
        takeUntil(this._onDestroy$),
        catchError(err => throwError(() => console.log(err)))
        )
      .subscribe((data) => {
        this.router.navigate(['/'], {
          state: {
            data: data,
          },
        });
      });
  }
}
