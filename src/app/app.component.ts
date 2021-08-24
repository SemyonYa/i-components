import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { FakeApiService } from './services/fake-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'i-components';
  users: User[];
  columns: { field: string }[];

  constructor(private fakeApiService: FakeApiService) {
    fakeApiService.users$
      .subscribe(
        users => {
          this.users = users;
          this.columns = [
            { field: 'ID' },
            { field: 'login' },
            { field: 'name' },
            { field: 'role' },
            { field: 'age' }
          ];
        }
      );
  }

  ngOnInit(): void {

  }

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
