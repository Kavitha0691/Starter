import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  template: `
    <nav class="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
      <div class="container mx-auto px-4">
        <ul class="flex flex-wrap items-center justify-center sm:justify-start gap-1 sm:gap-2 py-3">
          @for (item of navItems; track item.id) {
            <li>
              <button
                (click)="selectItem(item.id)"
                class="px-4 sm:px-6 py-2.5 sm:py-3 rounded-md transition-all duration-200 text-sm sm:text-base font-medium hover:bg-white/20"
                [class.bg-white/25]="selectedItem() === item.id"
                [class.shadow-md]="selectedItem() === item.id"
              >
                {{ item.label }}
              </button>
            </li>
          }
        </ul>
      </div>
    </nav>
  `,
  standalone: true
})
export class NavigationComponent {
  selectedItem = signal<string | null>('accommodation');

  navItems = [
    { id: 'accommodation', label: 'Accommodation' },
    { id: 'package', label: 'Package' },
    { id: 'skipass', label: 'Ski Pass' },
    { id: 'rent', label: 'Rent' },
    { id: 'skischool', label: 'Ski school' }
  ];

  selectItem(id: string) {
    this.selectedItem.set(id);
    console.log('Selected:', id);
  }
}
