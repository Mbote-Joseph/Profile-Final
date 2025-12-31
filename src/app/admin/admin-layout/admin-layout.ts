import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  onViewPortfolio() {
    // TODO: navigate to portfolio public page
    window.open('/', '_blank');
  }

  onLogout() {
    // TODO: call auth logout + navigate
    alert('Logout clicked');
  }
}
