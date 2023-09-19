import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvaModalComponent } from './tva-modal.component';

describe('TvaModalComponent', () => {
  let component: TvaModalComponent;
  let fixture: ComponentFixture<TvaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvaModalComponent]
    });
    fixture = TestBed.createComponent(TvaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
