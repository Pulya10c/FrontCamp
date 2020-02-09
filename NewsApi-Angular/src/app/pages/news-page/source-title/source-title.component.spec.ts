import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceTitleComponent } from './source-title.component';

describe('SourceTitleComponent', () => {
  let component: SourceTitleComponent;
  let fixture: ComponentFixture<SourceTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
