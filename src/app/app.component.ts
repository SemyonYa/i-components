import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i-components';

  // TOGGLE
  toggleValue: boolean = false;

  onToggle(value: boolean) {
    this.toggleValue = value;
  }

  // SEARCH
  searchValue: string = '';
  onSearchChange(value: string) {
    this.searchValue = value;
  }
}
