import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from 'app/service/http.service';
import { AppConstant } from 'app/constant/app-constant';
import { HttpParams } from '@angular/common/http';
import { Subject, catchError, concatMap, takeUntil, throwError } from 'rxjs';
import { GlobalService } from 'app/service/global.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  private _onDestroy$: Subject<void> = new Subject();
  gameResults!: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private globalService: GlobalService
  ) {
    this.route.params
      .pipe(
        concatMap((p: Params) => {
          const params = new HttpParams()
              .append('team', p['id'])
              .append('season', AppConstant.CURRENT_SEASON),
            options = {
              redirect: 'follow',
            };
          return this.httpService.get(params, 'fixtures', options).pipe(
            takeUntil(this._onDestroy$),
            catchError(err => throwError(() => console.log(err)))
          );
        })
      )
      .subscribe((data) => {
        this.gameResults = data.response.slice(0, 10);
        this.globalService.isLoading = false;
      });
  }

  onDestroy() {
    this._onDestroy$.next();
  }

  onClickBack() {
    this.globalService.isLoading = true;
    this.globalService.cacheStore[this.globalService.currentLeague].pipe(
      takeUntil(this._onDestroy$),
      catchError(err => throwError(() => console.log(err)))
    ).subscribe(
      (data) => {
        this.router.navigate(['/'], {
          state: {
            data: data,
          },
        });
      }
    );
  }
}
