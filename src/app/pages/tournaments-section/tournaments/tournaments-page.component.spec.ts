import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsPage } from './tournaments-page.component';

describe('Tab3Page', () => {
  let component: TournamentsPage;
  let fixture: ComponentFixture<TournamentsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TournamentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
