import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredTextComponent } from './centered-text.component';

describe('CenteredTextComponent', () => {
  let component: CenteredTextComponent;
  let fixture: ComponentFixture<CenteredTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenteredTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
