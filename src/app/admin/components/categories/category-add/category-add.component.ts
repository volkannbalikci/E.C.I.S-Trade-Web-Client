import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../../services/common/http-client.service';
import { CategoryService } from '../../../../services/common/models/concrete/category.service';
import { CreateCategoryCommand } from '../../../../contracts/category/createCategoryCommand';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private categoryService: CategoryService, private alertfy: AlertifyService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  }

  @Output() createdCategory: EventEmitter<CreateCategoryCommand> = new EventEmitter();
  create(name: HTMLInputElement, description: HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom)
    const create_category_command: CreateCategoryCommand = new CreateCategoryCommand();
    create_category_command.name = name.value;
    create_category_command.description = description.value;
    this.categoryService.create(create_category_command, () => 
      {
        this.hideSpinner(SpinnerType.BallAtom)
        this.alertfy.message("Kategori Başarıyla Eklenmiştir", {
          dismissOthers:true,
          messageType: MessageType.Success,
          position: PositionType.TopRight
        });
        this.createdCategory.emit(create_category_command);
      });
  }
}

