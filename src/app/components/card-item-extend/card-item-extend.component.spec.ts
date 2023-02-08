import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemExtendComponent } from './card-item-extend.component';

describe('CardItemExtendComponent', () => {
  let component: CardItemExtendComponent;
  let fixture: ComponentFixture<CardItemExtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemExtendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
