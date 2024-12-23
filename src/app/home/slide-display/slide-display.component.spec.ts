import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDisplayComponent } from './slide-display.component';

describe('SlideDisplayComponent', () => {
  let component: SlideDisplayComponent;
  let fixture: ComponentFixture<SlideDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
