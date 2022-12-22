import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRowComponent } from './image-row.component';

describe('ImageRowComponent', () => {
  let component: ImageRowComponent;
  let fixture: ComponentFixture<ImageRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
