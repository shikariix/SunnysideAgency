import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphTitleComponent } from './paragraph-title.component';

describe('ParagraphTitleComponent', () => {
  let component: ParagraphTitleComponent;
  let fixture: ComponentFixture<ParagraphTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
