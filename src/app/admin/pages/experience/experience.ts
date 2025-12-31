import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { ExperienceModal } from './components/experience-modal/experience-modal';
import { ExperienceRowCard } from './components/experience-row-card/experience-row-card';

import type { ExperienceItem, ExperienceDraft } from './experience.types';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, ExperienceModal, ExperienceRowCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperiencePage {
  experiences: ExperienceItem[] = [
    {
      id: '1',
      position: 'Senior Software Engineer',
      company: 'Tech Corp',
      period: '2021 - Present',
      description:
        'Leading development of cloud-native applications and mentoring junior developers.',
      achievements: [],
    },
    {
      id: '2',
      position: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2019 - 2021',
      description: "Developed core features for the company's main product.",
      achievements: [],
    },
    {
      id: '3',
      position: 'Position',
      company: 'Company Name',
      period: '2024 - Present',
      description: 'Job description',
      achievements: [],
    },
  ];

  modalOpen = false;
  selected: ExperienceItem | null = null;

  openAdd() {
    this.selected = null;
    this.modalOpen = true;
  }

  openEdit(item: ExperienceItem) {
    this.selected = item;
    this.modalOpen = true;
  }

  close() {
    this.modalOpen = false;
    this.selected = null;
  }

  delete(id: string) {
    this.experiences = this.experiences.filter((e) => e.id !== id);
  }

  save(draft: ExperienceDraft) {
    if (this.selected) {
      this.experiences = this.experiences.map((e) =>
        e.id === this.selected!.id ? { ...e, ...draft } : e
      );
    } else {
      this.experiences = [
        ...this.experiences,
        { id: crypto.randomUUID(), ...draft },
      ];
    }
    this.close();
  }
}
