import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <!-- Header Component -->
    <app-header></app-header>

    <!-- Main Content Area -->
    <div class="min-h-screen bg-gray-50">
      <router-outlet />
    </div>
  `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('quick-start');
}
