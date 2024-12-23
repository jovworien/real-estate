import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidDisplayComponent } from './vid-display.component';

describe('VidDisplayComponent', () => {
  let component: VidDisplayComponent;
  let fixture: ComponentFixture<VidDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VidDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
