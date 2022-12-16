import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreParagraphComponent } from './learn-more-paragraph.component';

describe('LearnMoreParagraphComponent', () => {
  let component: LearnMoreParagraphComponent;
  let fixture: ComponentFixture<LearnMoreParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnMoreParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnMoreParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
