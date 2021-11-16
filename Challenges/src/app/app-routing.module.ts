import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyChallengeComponent } from './daily-challenge/daily-challenge.component';
import { UpcomingChallengesComponent } from './upcoming-challenges/upcoming-challenges.component';

const routes: Routes = [
  { path: '', component: DailyChallengeComponent },
  { path: 'full-week', component: UpcomingChallengesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
