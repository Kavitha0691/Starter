import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Language {
  name: string;
  flag: string;
  code: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  standalone: true
})
export class HeaderComponent {
  selectedLanguage = signal<Language | null>(null);
  isDropdownOpen = signal(false);
  isSearchOpen = signal(false);
  searchQuery = signal('');

  languages: Language[] = [
    { name: 'English', flag: '🇬🇧', code: 'en' },
    { name: 'Swedish', flag: '🇸🇪', code: 'sv' }
  ];

  toggleDropdown() {
    this.isDropdownOpen.update(value => !value);
  }

  toggleSearch() {
    this.isSearchOpen.update(value => !value);
    if (!this.isSearchOpen()) {
      this.searchQuery.set('');
    }
  }

  selectLanguage(language: Language) {
    this.selectedLanguage.set(language);
    this.isDropdownOpen.set(false);
  }

  onSearch() {
    console.log('Search query:', this.searchQuery());
    // Implement search functionality here
  }

  onLogin() {
    console.log('Login clicked');
    // Implement login functionality here
  }
}
