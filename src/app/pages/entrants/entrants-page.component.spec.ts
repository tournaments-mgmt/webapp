import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrantsPage } from './entrants-page.component';

describe('Tab1Page', () => {
  let component: EntrantsPage;
  let fixture: ComponentFixture<EntrantsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(EntrantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
