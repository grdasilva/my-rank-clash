import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanProfileComponent } from './clan-profile.component';

describe('ClanProfileComponent', () => {
  let component: ClanProfileComponent;
  let fixture: ComponentFixture<ClanProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
