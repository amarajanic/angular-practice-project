import { Component, EventEmitter, Input, output, Output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

/*
type User = {
  id: string;
  avatar: string;
  name: string;
}*/
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //@Input ({required:true}) id!: string;
  //@Input({required:true}) avatar!: string;
  //@Input({required:true}) name!: string;
  //avatar = input<string>('');
  //name = input<string>('Unknown User');

  @Input({required:true}) user!: User;
  @Input({required:true}) isSelected!: boolean;

  @Output() select = new EventEmitter<string>();

  //select = output<string>()

  get imagePath (){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }

}






 //selectedUser = DUMMY_USERS[randomIndex]
  //selectedUser = signal(DUMMY_USERS[randomIndex])
  //selectedUserImage = 'assets/users/' + this.selectedUser.avatar
  //imagePath = computed(() => 'assets/users/'+ this.selectedUser().avatar)
  /*get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar
  }*/

  /*onSelectUser(){
    console.log('Clicked!')
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    //this.selectedUser = DUMMY_USERS[randomIndex]
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }*/