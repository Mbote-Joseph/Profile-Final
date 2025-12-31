import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Settings } from "./components/profile/settings/settings";
import { Hero } from "./components/profile/hero/hero";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mbote-profile');
}
