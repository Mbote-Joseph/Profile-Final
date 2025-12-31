import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { ExperienceItem } from '../../experience.types';

@Component({
  selector: 'app-experience-row-card',
  standalone: true,
  templateUrl: './experience-row-card.html',
  styleUrl: './experience-row-card.css',
})
export class ExperienceRowCard {
  @Input({ required: true }) experience!: ExperienceItem;

  @Output() edit = new EventEmitter<ExperienceItem>();
  @Output() remove = new EventEmitter<string>();
}
