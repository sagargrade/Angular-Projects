import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingChallengesComponent } from './upcoming-challenges.component';

describe('UpcomingChallengesComponent', () => {
  let component: UpcomingChallengesComponent;
  let fixture: ComponentFixture<UpcomingChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingChallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
