import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  users$ = new BehaviorSubject<User[]>([1, 2, 3, 4, 5].map(i => {
    return {
      id: `ID${i}`,
      login: `Login${i}`,
      name: `Name #${i}`,
      role: i % 2 === 0 ? 'admin' : 'user',
      age: i ** 3 + 13
    } as User
  }));
  constructor() { }

  pushUserToStream(user: User) {
    const users = this.users$.value;
    users.push({
      id: `ID${users.length + 2}`,
      login: `Login${users.length + 2}`,
      name: `Name #${users.length + 2}`,
      role: users.length % 2 === 0 ? 'admin' : 'user',
      age: users.length ** 3 + 13
    });
    this.users$.next(users);
  }
}
