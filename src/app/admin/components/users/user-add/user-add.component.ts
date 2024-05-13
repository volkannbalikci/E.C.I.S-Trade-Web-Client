import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { UserService } from '../../../../services/common/models/concrete/user.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateUserCommand } from '../../../../contracts/user/createUserCommand';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private userService: UserService, private alertfy: AlertifyService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  }

  @Output() createdUser: EventEmitter<CreateUserCommand> = new EventEmitter();
  create( email: HTMLInputElement, password: HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom)
    const create_user_command: CreateUserCommand = new CreateUserCommand();
    create_user_command.email = email.value;
    create_user_command.password = password.value;
    create_user_command.status = true;
    this.userService.create(create_user_command, () => 
      {
        this.hideSpinner(SpinnerType.BallAtom)
        this.alertfy.message("Kullanıcı Başarıyla Eklenmiştir", {
          dismissOthers:true,
          messageType: MessageType.Success,
          position: PositionType.TopRight
        });
        this.createdUser.emit(create_user_command);
      });
  }
}
