import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  template: `
    <nav class="bg-gray-800 text-white">
      <div class="container mx-auto px-4">
        <ul class="flex flex-wrap items-center justify-center sm:justify-start space-x-2 sm:space-x-6 py-4">
          @for (item of navItems; track item.id) {
            <li>
              <button
                (click)="selectItem(item.id)"
                class="px-3 py-2 rounded-lg transition-colors hover:bg-gray-700"
                [class.bg-gray-700]="selectedItem() === item.id"
                [class.font-semibold]="selectedItem() === item.id"
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
  selectedItem = signal<string | null>(null);

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
