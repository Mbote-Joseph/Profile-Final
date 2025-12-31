import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProjectModal, ProjectDraft } from './components/project-modal/project-modal';
import { ProjectRowCard, Project } from './components/project-row-card/project-row-card';


@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf, ProjectRowCard, ProjectModal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: '',
      githubUrl: '',
      liveUrl: '',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and analytics.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      imageUrl: '',
      githubUrl: '',
      liveUrl: '',
    },
  ];

  modalOpen = false;
  selected: Project | null = null;

  openAdd() {
    this.selected = null;
    this.modalOpen = true;
  }

  openEdit(p: Project) {
    this.selected = p;
    this.modalOpen = true;
  }

  close() {
    this.modalOpen = false;
    this.selected = null;
  }

  delete(id: string) {
    this.projects = this.projects.filter(p => p.id !== id);
  }

  save(draft: ProjectDraft) {
    if (this.selected) {
      this.projects = this.projects.map(p =>
        p.id === this.selected!.id ? { ...p, ...draft } : p
      );
    } else {
      this.projects = [
        ...this.projects,
        { id: crypto.randomUUID(), ...draft },
      ];
    }
    this.close();
  }
}
