import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../../services/common/models/concrete/user.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { GetListUserListItemDto } from '../../../../contracts/user/getListUserListItemDto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateUserCommand } from '../../../../contracts/user/createUserCommand';
import { Paginate } from '../../../../contracts/common/paginate';
declare var $ : any

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent extends BaseComponent implements OnInit {
  constructor(private userService: UserService, private alertfy: AlertifyService,spinner: NgxSpinnerService) {
    super(spinner)
   }
   displayedColumns: string[] = ['id', 'passwordHash', 'passwordSalt', 'status', 'delete', 'edit'];
   dataSource: MatTableDataSource<GetListUserListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;

   createdUser(createdUser: CreateUserCommand){
    this.getUsers();
   }
    async getUsers(){
      let allUsers: Paginate<GetListUserListItemDto> = await this.userService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
        this.alertfy.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: PositionType.TopRight
        })
      )
      this.dataSource = new MatTableDataSource<GetListUserListItemDto>(allUsers.items);
      this.paginator.length = allUsers.count;
      this.paginator.pageSize = allUsers.size;
      this.paginator.pageIndex = allUsers.index;
    }
    
    async pageChanged(){
      await this.getUsers(); 
     }

     animation() {
      $(document).on('click','td',function() {
      alert('clicked');
      });
  }
     
  async ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
    await this.getUsers();
    this.hideSpinner(SpinnerType.BallAtom);
  }
}
