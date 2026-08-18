import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';


export type UserType = {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('first-angular-app');
  users: UserType[] = DUMMY_USERS;
  selectedUser = signal(this.users[0]);
  onSelectUser(userId: string): void {
    this.selectedUser.set(this.users.find(user => user.id === userId)!);
  }
}
