import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear(); // Gets the current year as a number (e.g., 2025)
  }
}
