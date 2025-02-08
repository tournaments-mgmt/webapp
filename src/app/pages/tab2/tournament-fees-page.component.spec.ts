import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFeesPage } from './tournament-fees-page.component';

describe('Tab2Page', () => {
  let component: TournamentFeesPage;
  let fixture: ComponentFixture<TournamentFeesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TournamentFeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
