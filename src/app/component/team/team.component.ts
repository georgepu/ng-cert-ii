import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from 'app/service/http.service';
import { AppConstant } from 'app/constant/app-constant';
import { HttpParams } from '@angular/common/http';
import { concatMap } from 'rxjs';
import { GlobalService } from 'app/service/global.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
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
          return this.httpService.get(params, 'fixtures', options);
        })
      )
      .subscribe((data) => {
        this.gameResults = data.response.slice(0, 10);
      });
  }

  onClickBack() {
    this.globalService.cacheStore[this.globalService.currentLeague].subscribe(
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
