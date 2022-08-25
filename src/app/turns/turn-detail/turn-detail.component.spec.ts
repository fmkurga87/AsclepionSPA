import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnDetailComponent } from './turn-detail.component';

describe('TurnDetailComponent', () => {
  let component: TurnDetailComponent;
  let fixture: ComponentFixture<TurnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
