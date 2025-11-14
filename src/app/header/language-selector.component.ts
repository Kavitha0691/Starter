import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Language {
  name: string;
  flag: string;
  code: string;
}

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule],
  template: `
    <div class="relative">
      <button
        (click)="toggleDropdown()"
        class="flex items-center space-x-2 p-2 transition-colors group"
        aria-label="Select language"
      >
        @if (selectedLanguage()) {
          <!-- Show selected language flag -->
          <img
            [src]="selectedLanguage()!.flag"
            [alt]="selectedLanguage()!.name"
            class="w-6 h-6 rounded-full object-cover border border-gray-300 group-hover:border-blue-600"
          />
        } @else {
          <!-- Show globe icon when no language selected -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        }
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-gray-700 group-hover:text-blue-600 transition-all"
          [class.rotate-180]="isDropdownOpen()"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <!-- Dropdown Menu -->
      @if (isDropdownOpen()) {
        <div class="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
          <ul class="py-1">
            @for (language of languages; track language.code) {
              <li>
                <button
                  (click)="selectLanguage(language)"
                  class="w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors flex items-center space-x-3"
                  [class.bg-blue-100]="selectedLanguage()?.code === language.code"
                  [class.font-semibold]="selectedLanguage()?.code === language.code"
                >
                  <img
                    [src]="language.flag"
                    [alt]="language.name"
                    class="w-6 h-6 rounded-full object-cover border border-gray-300"
                  />
                  <span>{{ language.name }}</span>
                </button>
              </li>
            }
          </ul>
        </div>
      }
    </div>
  `,
  standalone: true
})
export class LanguageSelectorComponent {
  selectedLanguage = signal<Language | null>(null);
  isDropdownOpen = signal(false);

  languages: Language[] = [
    { name: 'English', flag: 'https://flagcdn.com/w40/gb.png', code: 'en' },
    { name: 'Swedish', flag: 'https://flagcdn.com/w40/se.png', code: 'sv' }
  ];

  toggleDropdown() {
    this.isDropdownOpen.update(value => !value);
  }

  selectLanguage(language: Language) {
    this.selectedLanguage.set(language);
    this.isDropdownOpen.set(false);
  }
}
