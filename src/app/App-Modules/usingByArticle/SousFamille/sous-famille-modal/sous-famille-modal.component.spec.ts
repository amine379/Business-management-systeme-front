import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousFamilleModalComponent } from './sous-famille-modal.component';

describe('SousFamilleModalComponent', () => {
  let component: SousFamilleModalComponent;
  let fixture: ComponentFixture<SousFamilleModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousFamilleModalComponent]
    });
    fixture = TestBed.createComponent(SousFamilleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
