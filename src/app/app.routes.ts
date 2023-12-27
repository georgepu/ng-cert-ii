import { Routes } from '@angular/router';
import { LeagueStandingComponent } from './component/league-standing/league-standing.component';
import { TeamComponent } from './component/team/team.component';

export const routes: Routes = [
    {
        path: '',
        component: LeagueStandingComponent
    },
    {
        path: 'teams/:id',
        component: TeamComponent
    }
];
