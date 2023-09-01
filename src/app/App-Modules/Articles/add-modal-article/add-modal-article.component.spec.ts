import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalArticleComponent } from './add-modal-article.component';

describe('AddModalArticleComponent', () => {
  let component: AddModalArticleComponent;
  let fixture: ComponentFixture<AddModalArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddModalArticleComponent]
    });
    fixture = TestBed.createComponent(AddModalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
