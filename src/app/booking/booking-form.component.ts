import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 -mt-6 relative z-10 border border-gray-100">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <!-- Destination -->
        <div class="space-y-2">
          <label class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Choose destination</label>
          <select
            [value]="destination()"
            (change)="destination.set($any($event.target).value)"
            class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-gray-50 hover:bg-white text-base font-medium"
          >
            <option value="">Where do you want to live?</option>
            <option value="are">Åre</option>
            <option value="trysil">Trysil</option>
            <option value="hemsedal">Hemsedal</option>
            <option value="vemdalen">Vemdalen</option>
            <option value="salen">Sälen</option>
          </select>
        </div>

        <!-- Guests -->
        <div class="space-y-2">
          <label class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Add guests</label>
          <div class="relative">
            <button
              (click)="toggleGuestSelector()"
              class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-left flex items-center justify-between bg-gray-50 hover:bg-white"
            >
              <span class="text-gray-800 font-medium">{{ guestsDisplay() }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                [class.rotate-180]="isGuestSelectorOpen()"
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

            @if (isGuestSelectorOpen()) {
              <div class="absolute top-full mt-2 w-full bg-white border-2 border-gray-200 rounded-xl shadow-2xl p-5 z-20">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-semibold text-gray-700">Adults</span>
                    <div class="flex items-center space-x-3">
                      <button
                        (click)="decrementAdults()"
                        class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-bold"
                      >
                        -
                      </button>
                      <span class="w-10 text-center font-bold text-lg">{{ adults() }}</span>
                      <button
                        (click)="incrementAdults()"
                        class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <span class="text-sm font-semibold text-gray-700">Children</span>
                    <div class="flex items-center space-x-3">
                      <button
                        (click)="decrementChildren()"
                        class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-bold"
                      >
                        -
                      </button>
                      <span class="w-10 text-center font-bold text-lg">{{ children() }}</span>
                      <button
                        (click)="incrementChildren()"
                        class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Arrival Date -->
        <div class="space-y-2">
          <label class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Select arrival day</label>
          <input
            type="date"
            [value]="arrivalDate()"
            (change)="arrivalDate.set($any($event.target).value)"
            class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-gray-50 hover:bg-white text-base font-medium"
            placeholder="Arrival day"
          />
        </div>

        <!-- Search Button -->
        <div class="flex items-end lg:col-span-2">
          <button
            (click)="search()"
            class="w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
            <span>Search accommodation</span>
          </button>
        </div>
      </div>
    </div>
  `,
  standalone: true
})
export class BookingFormComponent {
  destination = signal('');
  adults = signal(2);
  children = signal(0);
  arrivalDate = signal('');
  isGuestSelectorOpen = signal(false);

  guestsDisplay() {
    const total = this.adults() + this.children();
    if (total === 0) return 'Which';
    return `${this.adults()} adult${this.adults() !== 1 ? 's' : ''}, ${this.children()} child${this.children() !== 1 ? 'ren' : ''}`;
  }

  toggleGuestSelector() {
    this.isGuestSelectorOpen.update(v => !v);
  }

  incrementAdults() {
    this.adults.update(v => v + 1);
  }

  decrementAdults() {
    this.adults.update(v => Math.max(0, v - 1));
  }

  incrementChildren() {
    this.children.update(v => v + 1);
  }

  decrementChildren() {
    this.children.update(v => Math.max(0, v - 1));
  }

  search() {
    console.log('Searching with:', {
      destination: this.destination(),
      adults: this.adults(),
      children: this.children(),
      arrivalDate: this.arrivalDate()
    });
  }
}
