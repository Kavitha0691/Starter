import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      @if (isSearchOpen()) {
        <div class="flex items-center border border-gray-300 rounded-lg px-2 sm:px-3 py-2 transition-all">
          <input
            type="text"
            placeholder="Search..."
            class="outline-none text-gray-700 w-24 sm:w-32 md:w-48"
            [value]="searchQuery()"
            (input)="searchQuery.set($any($event.target).value)"
            (keyup.enter)="onSearch()"
          />
          <button
            (click)="onSearch()"
            class="ml-1 sm:ml-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            (click)="toggleSearch()"
            class="ml-1 text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Close search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      } @else {
        <button
          (click)="toggleSearch()"
          class="p-2 transition-colors"
          aria-label="Open search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-700 hover:text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      }
    </div>
  `,
  standalone: true
})
export class SearchComponent {
  isSearchOpen = signal(false);
  searchQuery = signal('');

  toggleSearch() {
    this.isSearchOpen.update(value => !value);
    if (!this.isSearchOpen()) {
      this.searchQuery.set('');
    }
  }

  onSearch() {
    console.log('Search query:', this.searchQuery());
    // Implement search functionality here
  }
}
