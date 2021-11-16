import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyChallengeComponent } from './daily-challenge/daily-challenge.component';
import { UpcomingChallengesComponent } from './upcoming-challenges/upcoming-challenges.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyChallengeComponent,
    UpcomingChallengesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
