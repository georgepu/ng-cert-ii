import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpService } from 'app/service/http.service';

@Component({
  selector: 'app-league-standing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './league-standing.component.html',
  styleUrl: './league-standing.component.scss',
})
export class LeagueStandingComponent {
  leagueStandingData!: any;

  constructor(private httpService: HttpService, private router: Router) {
    this.router.events.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
        this.leagueStandingData =
          navigation.extras.state['data'].response[0].league.standings[0];
      }
    });
  }

  onClickTeam(id: number) {
    this.router.navigate(['/teams', id]);
  }
}
