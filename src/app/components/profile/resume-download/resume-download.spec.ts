import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDownload } from './resume-download';

describe('ResumeDownload', () => {
  let component: ResumeDownload;
  let fixture: ComponentFixture<ResumeDownload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeDownload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeDownload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
