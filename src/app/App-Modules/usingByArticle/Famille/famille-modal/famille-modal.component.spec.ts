import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleModalComponent } from './famille-modal.component';

describe('FamilleModalComponent', () => {
  let component: FamilleModalComponent;
  let fixture: ComponentFixture<FamilleModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilleModalComponent]
    });
    fixture = TestBed.createComponent(FamilleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
