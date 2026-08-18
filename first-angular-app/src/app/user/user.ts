import { Component, Input, computed, input, Output, EventEmitter, output } from '@angular/core';
import { UserType } from '../app';
import { Card } from '../shared/card/card';


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) selected!: boolean;
  @Output() selectUser = new EventEmitter<string>();
  // avatar = input<string>();
  // name = input<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());
  // selectUser = output<string>();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(): void {
    this.selectUser.emit(this.user.id);
  }
}
