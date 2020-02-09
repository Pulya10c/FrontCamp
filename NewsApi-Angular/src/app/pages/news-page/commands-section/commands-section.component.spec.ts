import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsSectionComponent } from './commands-section.component';

describe('CommandsSectionComponent', () => {
  let component: CommandsSectionComponent;
  let fixture: ComponentFixture<CommandsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
