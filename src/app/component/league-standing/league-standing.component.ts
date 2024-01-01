import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GlobalService } from 'app/service/global.service';
import { LeagueStanding } from 'app/model/league-standing';

@Component({
  selector: 'app-league-standing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './league-standing.component.html',
  styleUrl: './league-standing.component.scss',
})
export class LeagueStandingComponent {
  leagueStandingData!: LeagueStanding[];

  constructor(private globalService: GlobalService, private router: Router) {
    this.router.events.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
        this.leagueStandingData =
          navigation.extras.state['data'].response[0]?.league.standings[0];
          this.globalService.isLoading = false;
      }
    });
  }

  onClickTeam(id: number) {
    this.globalService.isLoading = true;
    this.router.navigate(['/teams', id]);
  }
}
