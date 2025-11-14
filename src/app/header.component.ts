import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  standalone: true
})
export class HeaderComponent {
  selectedLanguage = signal<string | null>(null);
  isDropdownOpen = signal(false);

  languages = ['English', 'Swedish'];

  toggleDropdown() {
    this.isDropdownOpen.update(value => !value);
  }

  selectLanguage(language: string) {
    this.selectedLanguage.set(language);
    this.isDropdownOpen.set(false);
  }
}
