import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPricenameComponent } from './img-pricename.component';

describe('ImgPricenameComponent', () => {
  let component: ImgPricenameComponent;
  let fixture: ComponentFixture<ImgPricenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgPricenameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgPricenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
