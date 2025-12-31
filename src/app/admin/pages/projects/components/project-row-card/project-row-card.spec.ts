import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRowCard } from './project-row-card';

describe('ProjectRowCard', () => {
  let component: ProjectRowCard;
  let fixture: ComponentFixture<ProjectRowCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectRowCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRowCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
