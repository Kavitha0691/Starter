import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BookingFormComponent } from './booking/booking-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavigationComponent, BookingFormComponent],
  template: `
    <!-- Header Component -->
    <app-header></app-header>

    <!-- Navigation -->
    <app-navigation></app-navigation>

    <!-- Booking Form -->
    <div class="container mx-auto px-4 py-8">
      <app-booking-form></app-booking-form>
    </div>

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
