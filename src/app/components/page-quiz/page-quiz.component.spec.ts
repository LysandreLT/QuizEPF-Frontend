import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizComponent } from './page-quiz.component';

describe('PageQuizComponent', () => {
  let component: PageQuizComponent;
  let fixture: ComponentFixture<PageQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageQuizComponent]
    });
    fixture = TestBed.createComponent(PageQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
