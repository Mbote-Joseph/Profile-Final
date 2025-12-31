import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}


@Component({
  selector: 'app-project-row-card',
  imports: [CommonModule],
  templateUrl: './project-row-card.html',
  styleUrl: './project-row-card.css',
})
export class ProjectRowCard {
   @Input({ required: true }) project!: Project;

  @Output() edit = new EventEmitter<Project>();
  @Output() remove = new EventEmitter<string>();
}
