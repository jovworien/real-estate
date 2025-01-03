import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDisplayComponent } from './img-display.component';

describe('ImgDisplayComponent', () => {
  let component: ImgDisplayComponent;
  let fixture: ComponentFixture<ImgDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
