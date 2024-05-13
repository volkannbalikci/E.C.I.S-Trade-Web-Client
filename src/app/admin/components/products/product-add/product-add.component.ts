import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProductService } from '../../../../services/common/models/concrete/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { CreateProductCommand } from '../../../../contracts/products/createProductCommand';
import { GetListBrandListItemDto } from '../../../../contracts/brand/getListBrandListItemDto';
import { BrandService } from '../../../../services/common/models/concrete/brand.service';
import { GetListCategoryListItemDto } from '../../../../contracts/category/getListCategoryListItemDto';
import { Paginate } from '../../../../contracts/common/paginate';
import { MatPaginator } from '@angular/material/paginator';
import { CategoryService } from '../../../../services/common/models/concrete/category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent extends BaseComponent implements OnInit  {
  constructor(private categoryService: CategoryService, private brandService: BrandService,spinner: NgxSpinnerService, private productService: ProductService, private alertfy: AlertifyService) {
    super(spinner)
   }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.getBrands();
    this.getCategories();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  brands: GetListBrandListItemDto[] = null
  categories: GetListCategoryListItemDto[] = null;


  async getBrands(){
   let allBrands: Paginate<GetListBrandListItemDto> = await this.brandService.get(0, this.brands? this.brands.length : 25  ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
     this.alertfy.message(errorMessage, {
       dismissOthers: true,
       messageType: MessageType.Error,
       position: PositionType.TopRight
     })
   )
   this.brands = allBrands.items;
   this.brands.length = allBrands.count;
  }

  async getCategories(){
    let allCategories: Paginate<GetListCategoryListItemDto> = await this.categoryService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
      this.alertfy.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: PositionType.TopRight
      })
    )
    this.categories = allCategories.items;
    this.paginator.length = allCategories.count;
    this.paginator.pageSize = allCategories.size;
    this.paginator.pageIndex = allCategories.index;
  }

  @Output() createdProduct: EventEmitter<CreateProductCommand> = new EventEmitter();
  create(brandId: any,categoryId: any,name: HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom)
    const create_product_command: CreateProductCommand = new CreateProductCommand();
    create_product_command.brandId = brandId;
    create_product_command.categoryId = categoryId;
    create_product_command.name = name.value;
    this.productService.create(create_product_command, () => 
      {
        this.hideSpinner(SpinnerType.BallAtom)
        this.alertfy.message("Ürün Başarıyla Eklenmiştir", {
          dismissOthers:true,
          messageType: MessageType.Success,
          position: PositionType.TopRight
        });
        this.createdProduct.emit(create_product_command);
      });
  }
}

interface ComboBoxFields{
  value: string;
  viewValue: string;
}