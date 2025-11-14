import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <button
      (click)="onLogin()"
      class="flex items-center space-x-2 px-3 py-2 transition-colors"
      aria-label="Login"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-700 hover:text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <span class="text-gray-700 font-medium hover:text-blue-600">Login</span>
    </button>
  `,
  standalone: true
})
export class LoginComponent {
  onLogin() {
    console.log('Login clicked');
    // Implement login functionality here
  }
}
