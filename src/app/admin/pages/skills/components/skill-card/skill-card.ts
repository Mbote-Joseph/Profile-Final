import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Skill } from '../../skills.types';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  @Input({ required: true }) skill!: Skill;

  @Output() edit = new EventEmitter<Skill>();     // ✅ exact same Skill type
  @Output() remove = new EventEmitter<string>();
}
