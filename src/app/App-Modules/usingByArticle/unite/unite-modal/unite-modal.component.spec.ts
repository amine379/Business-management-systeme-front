import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteModalComponent } from './unite-modal.component';

describe('UniteModalComponent', () => {
  let component: UniteModalComponent;
  let fixture: ComponentFixture<UniteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniteModalComponent]
    });
    fixture = TestBed.createComponent(UniteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
