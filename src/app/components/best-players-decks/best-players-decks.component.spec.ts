import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlayersDecksComponent } from './best-players-decks.component';

describe('BestPlayersDecksComponent', () => {
  let component: BestPlayersDecksComponent;
  let fixture: ComponentFixture<BestPlayersDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPlayersDecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPlayersDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
