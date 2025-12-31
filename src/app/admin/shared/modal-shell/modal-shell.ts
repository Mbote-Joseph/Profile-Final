import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-shell',
  imports: [],
  templateUrl: './modal-shell.html',
  styleUrl: './modal-shell.css',
})
export class ModalShell {
  @Input({ required: true }) title = '';
  @Output() close = new EventEmitter<void>();

  onBackdrop(e: MouseEvent) {
    // close only when clicking outside the modal content
    if ((e.target as HTMLElement).classList.contains('overlay')) {
      this.close.emit();
    }
  }
}
