import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceRowCard } from './experience-row-card';

describe('ExperienceRowCard', () => {
  let component: ExperienceRowCard;
  let fixture: ComponentFixture<ExperienceRowCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceRowCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceRowCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
