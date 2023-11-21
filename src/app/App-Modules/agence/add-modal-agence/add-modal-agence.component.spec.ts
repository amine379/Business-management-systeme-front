import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalAgenceComponent } from './add-modal-agence.component';

describe('AddModalAgenceComponent', () => {
  let component: AddModalAgenceComponent;
  let fixture: ComponentFixture<AddModalAgenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddModalAgenceComponent]
    });
    fixture = TestBed.createComponent(AddModalAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
