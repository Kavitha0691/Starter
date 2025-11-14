import { Component } from '@angular/core';
import { HeaderTitleComponent } from './header/header-title.component';
import { SearchComponent } from './header/search.component';
import { CartComponent } from './header/cart.component';
import { LoginComponent } from './header/login.component';
import { LanguageSelectorComponent } from './header/language-selector.component';

@Component({
  selector: 'app-header',
  imports: [
    HeaderTitleComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    LanguageSelectorComponent
  ],
  template: `
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo/Title -->
          <app-header-title></app-header-title>

          <!-- Right side: Search, Cart, Login, and Language -->
          <div class="flex items-center space-x-2">
            <app-search></app-search>
            <app-cart></app-cart>
            <app-login></app-login>
            <app-language-selector></app-language-selector>
          </div>
        </div>
      </div>
    </header>
  `,
  standalone: true
})
export class HeaderComponent {}
