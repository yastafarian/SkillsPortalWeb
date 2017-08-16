import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSelectMenuComponent } from './skill-select-menu.component';

describe('SkillSelectMenuComponent', () => {
  let component: SkillSelectMenuComponent;
  let fixture: ComponentFixture<SkillSelectMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSelectMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
