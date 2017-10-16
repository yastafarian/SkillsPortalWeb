import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSkillListItemComponent } from './profile-skill-list-item.component';

describe('ProfileSkillListItemComponent', () => {
  let component: ProfileSkillListItemComponent;
  let fixture: ComponentFixture<ProfileSkillListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSkillListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSkillListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
