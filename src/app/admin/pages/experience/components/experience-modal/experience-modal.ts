import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { ExperienceItem, ExperienceDraft } from '../../experience.types';
import { ModalShell } from '../../../../shared/modal-shell/modal-shell';

@Component({
  selector: 'app-experience-modal',
  standalone: true,
  imports: [FormsModule, ModalShell],
  templateUrl: './experience-modal.html',
  styleUrl: './experience-modal.css',
})
export class ExperienceModal {
  @Input() initial: ExperienceItem | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<ExperienceDraft>();

  model = {
    position: '',
    company: '',
    period: '',
    description: '',
    achievementsText: '',
  };

  ngOnInit() {
    if (this.initial) {
      this.model.position = this.initial.position;
      this.model.company = this.initial.company;
      this.model.period = this.initial.period;
      this.model.description = this.initial.description;
      this.model.achievementsText = (this.initial.achievements || []).join('\n');
    }
  }

  submit() {
    const achievements = this.model.achievementsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    this.save.emit({
      position: this.model.position.trim(),
      company: this.model.company.trim(),
      period: this.model.period.trim(),
      description: this.model.description.trim(),
      achievements,
    });
  }
}
