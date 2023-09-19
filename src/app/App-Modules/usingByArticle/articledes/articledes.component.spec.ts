import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticledesComponent } from './articledes.component';

describe('ArticledesComponent', () => {
  let component: ArticledesComponent;
  let fixture: ComponentFixture<ArticledesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticledesComponent]
    });
    fixture = TestBed.createComponent(ArticledesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
