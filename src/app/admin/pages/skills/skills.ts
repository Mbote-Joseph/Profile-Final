import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { SkillModal } from './components/skill-modal/skill-modal';
import { SkillCard } from './components/skill-card/skill-card';

import type { Skill, ModalMode, SkillDraft } from './skills.types';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf, SkillModal, SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: Skill[] = [
    { id: '1', name: 'React', category: 'Frontend', level: 90 },
    { id: '2', name: 'TypeScript', category: 'Frontend', level: 85 },
  ];

  modalOpen = false;
  modalMode: ModalMode = 'add';
  selected: Skill | null = null;

  openAdd() {
    this.modalMode = 'add';
    this.selected = null;
    this.modalOpen = true;
  }

  openEdit(skill: Skill) {
    this.modalMode = 'edit';
    this.selected = skill;
    this.modalOpen = true;
  }

  close() {
    this.modalOpen = false;
    this.selected = null;
  }

  delete(id: string) {
    this.skills = this.skills.filter(s => s.id !== id);
  }

  save(draft: SkillDraft) {
    if (this.modalMode === 'edit' && this.selected) {
      this.skills = this.skills.map(s =>
        s.id === this.selected!.id ? { ...s, ...draft } : s
      );
    } else {
      this.skills = [...this.skills, { id: crypto.randomUUID(), ...draft }];
    }
    this.close();
  }
}
