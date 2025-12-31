import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalShell } from '../../../../shared/modal-shell/modal-shell';
import { Project } from '../project-row-card/project-row-card';


export interface ProjectDraft {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

@Component({
  selector: 'app-project-modal',
  imports: [FormsModule,ModalShell ],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css',
})
export class ProjectModal {
  @Input() initial: Project | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<ProjectDraft>();

  titleText = 'Edit Project';

  model = {
    title: 'New Project',
    description: 'Project description',
    technologiesText: '',
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
  };

  ngOnInit() {
    if (this.initial) {
      this.model.title = this.initial.title;
      this.model.description = this.initial.description;
      this.model.technologiesText = this.initial.technologies.join(', ');
      this.model.imageUrl = this.initial.imageUrl ?? '';
      this.model.githubUrl = this.initial.githubUrl ?? '';
      this.model.liveUrl = this.initial.liveUrl ?? '';
    } else {
      this.titleText = 'Edit Project';
    }
  }

  submit() {
    const techs = this.model.technologiesText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    this.save.emit({
      title: this.model.title.trim(),
      description: this.model.description.trim(),
      technologies: techs,
      imageUrl: this.model.imageUrl.trim(),
      githubUrl: this.model.githubUrl.trim(),
      liveUrl: this.model.liveUrl.trim(),
    });
  }
}
