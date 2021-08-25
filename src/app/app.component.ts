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
  breadcrumbs: { title: string, route: string }[] = [
    { title: 'Users', route: '/' },
    { title: 'User #56', route: '/' },
  ];

  constructor(private fakeApiService: FakeApiService) {
    fakeApiService.users$
      .subscribe(
        users => {
          this.users = users;
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
