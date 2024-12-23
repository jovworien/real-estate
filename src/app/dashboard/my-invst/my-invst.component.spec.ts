import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInvstComponent } from './my-invst.component';

describe('MyInvstComponent', () => {
  let component: MyInvstComponent;
  let fixture: ComponentFixture<MyInvstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyInvstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInvstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
