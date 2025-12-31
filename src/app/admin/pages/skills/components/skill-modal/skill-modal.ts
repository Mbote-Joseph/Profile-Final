import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Skill, SkillDraft, ModalMode } from '../../skills.types';
import { ModalShell } from '../../../../shared/modal-shell/modal-shell';

@Component({
  selector: 'app-skill-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './skill-modal.html',
  styleUrl: './skill-modal.css',
})
export class SkillModal {
  @Input() mode: ModalMode = 'add';
  @Input() initial: Skill | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<SkillDraft>(); // ✅ correct

  model: SkillDraft = { name: '', category: 'Frontend', level: 50 };

  ngOnInit() {
    if (this.initial) {
      this.model = {
        name: this.initial.name,
        category: this.initial.category,
        level: this.initial.level,
      };
    }
  }

  submit() {
    this.save.emit({
      name: this.model.name.trim(),
      category: this.model.category,
      level: Number(this.model.level),
    });
  }
}
