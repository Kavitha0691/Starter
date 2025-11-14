import { Component } from '@angular/core';

@Component({
  selector: 'app-header-title',
  template: `
    <div class="flex items-center">
      <h1 class="text-2xl font-bold text-gray-800">Starter</h1>
    </div>
  `,
  standalone: true
})
export class HeaderTitleComponent {}
