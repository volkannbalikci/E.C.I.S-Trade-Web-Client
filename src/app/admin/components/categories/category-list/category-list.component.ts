import { Component, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetListCategoryListItemDto } from '../../../../contracts/category/getListCategoryListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CategoryService } from '../../../../services/common/models/concrete/category.service';
import { ProductService } from '../../../../services/common/models/concrete/product.service';
import { GetListProductListItemDto } from '../../../../contracts/products/getListProductListItemDto';
import { CreateCategoryCommand } from '../../../../contracts/category/createCategoryCommand';
import { CategoryAddComponent } from '../category-add/category-add.component';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { ProductListInnerComponent } from '../../products/product-list-inner/product-list-inner.component';
declare var $ : any;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent extends BaseComponent implements OnInit {
  constructor(private productService: ProductService, private alertfy: AlertifyService,spinner: NgxSpinnerService, private categoryService: CategoryService) {
    super(spinner)
   }
   displayedColumns: string[] = ['categoryId', 'categoryName', 'categoryDescription' , 'delete', 'edit'];
   dataSource: MatTableDataSource<GetListCategoryListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(ProductListInnerComponent) productListInner : ProductListInnerComponent;
   
   getProductByCategoryId(id: string){
    this.showSpinner(SpinnerType.BallAtom);
    this.productListInner.getProductByCategoryId(id);
   }


   createdCategory(createdCategory: CreateCategoryCommand){
    this.getCategories();
   }
    async getCategories(){
      let allCategories: Paginate<GetListCategoryListItemDto> = await this.categoryService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
        this.alertfy.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: PositionType.TopRight
        })
      )
      this.dataSource = new MatTableDataSource<GetListCategoryListItemDto>(allCategories.items);
      this.paginator.length = allCategories.count;
      this.paginator.pageSize = allCategories.size;
      this.paginator.pageIndex = allCategories.index;
    }
    
    async pageChanged(){
      await this.getCategories(); 
     }

     async pageChangedProducts(){
      
     }

     animation() {
      $(document).on('click','td',function() {
      alert('clicked');
      });
  }
     
  async ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
    await this.getCategories();
    this.hideSpinner(SpinnerType.BallAtom);
  }
}
