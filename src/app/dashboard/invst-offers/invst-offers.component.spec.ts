import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvstOffersComponent } from './invst-offers.component';

describe('InvstOffersComponent', () => {
  let component: InvstOffersComponent;
  let fixture: ComponentFixture<InvstOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvstOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvstOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
