import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAuthComponent } from './description-auth.component';

describe('DescriptionAuthComponent', () => {
  let component: DescriptionAuthComponent;
  let fixture: ComponentFixture<DescriptionAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionAuthComponent]
    });
    fixture = TestBed.createComponent(DescriptionAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
