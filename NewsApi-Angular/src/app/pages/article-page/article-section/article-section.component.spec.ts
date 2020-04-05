import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionComponent } from './article-section.component';

describe('ArticleSectionComponent', () => {
  let component: ArticleSectionComponent;
  let fixture: ComponentFixture<ArticleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
