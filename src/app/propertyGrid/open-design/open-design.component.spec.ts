import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDesignComponent } from './open-design.component';

describe('OpenDesignComponent', () => {
  let component: OpenDesignComponent;
  let fixture: ComponentFixture<OpenDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
