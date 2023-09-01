import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFournisseurModalComponent } from './add-fournisseur-modal.component';

describe('AddFournisseurModalComponent', () => {
  let component: AddFournisseurModalComponent;
  let fixture: ComponentFixture<AddFournisseurModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFournisseurModalComponent]
    });
    fixture = TestBed.createComponent(AddFournisseurModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
