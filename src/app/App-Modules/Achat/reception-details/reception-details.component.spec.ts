import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionDetailsComponent } from './reception-details.component';

describe('ReceptionDetailsComponent', () => {
  let component: ReceptionDetailsComponent;
  let fixture: ComponentFixture<ReceptionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionDetailsComponent]
    });
    fixture = TestBed.createComponent(ReceptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
