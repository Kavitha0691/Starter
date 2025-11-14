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
  templateUrl: './header.component.html',
  standalone: true
})
export class HeaderComponent {}
