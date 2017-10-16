import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSkillComponent } from './add-new-skill.component';

describe('AddNewSkillComponent', () => {
  let component: AddNewSkillComponent;
  let fixture: ComponentFixture<AddNewSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
