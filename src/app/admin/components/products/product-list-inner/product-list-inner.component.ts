import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from '../../../../services/common/models/concrete/product.service';
import { GetListProductListItemDto } from '../../../../contracts/products/getListProductListItemDto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Paginate } from '../../../../contracts/common/paginate';

@Component({
  selector: 'app-product-list-inner',
  templateUrl: './product-list-inner.component.html',
  styleUrl: './product-list-inner.component.css',
})
export class ProductListInnerComponent extends BaseComponent implements OnInit {
  constructor(private alertfy: AlertifyService, spinner: NgxSpinnerService, private productService: ProductService
  ) {
    super(spinner)
   }

   displayedColumns: string[] = ['productId', 'productName', 'brandId', 'brandName', 'brandWebsiteUrl', 'categoryId', 'categoryName', 'categoryDescription'];
   dataSource: MatTableDataSource<GetListProductListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;

   async getProducts(){
    let allProducts: Paginate<GetListProductListItemDto> = await this.productService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
    this.alertfy.message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: PositionType.TopRight
    })
    )
    this.dataSource = new MatTableDataSource<GetListProductListItemDto>(allProducts.items);
    this.paginator.length = allProducts.count;
    this.paginator.pageSize = allProducts.size;
    this.paginator.pageIndex = allProducts.index
    }

    @Output() listedProductsByCategoryId: EventEmitter<Paginate<GetListProductListItemDto>> = new EventEmitter();
     async getProductByCategoryId(categoryId: string){
       let products: Paginate<GetListProductListItemDto> = await this.productService.getProductsByCategoryId(categoryId,this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
         this.alertfy.message(errorMessage, {
           dismissOthers: true,
           messageType: MessageType.Error,
           position: PositionType.TopRight
         }))
         this.dataSource = new MatTableDataSource<GetListProductListItemDto>(products.items);
         this.paginator.length = products.count;
         this.paginator.pageSize = products.size;
         this.paginator.pageIndex = products.index
      }

      @Output() listedProductsByBrandId: EventEmitter<Paginate<GetListProductListItemDto>> = new EventEmitter();
      async getProductByBrandId(brandId: string){
        let products: Paginate<GetListProductListItemDto> = await this.productService.getProductsByBrandId(brandId,this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 20 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
          this.alertfy.message(errorMessage, {
            dismissOthers: true,
            messageType: MessageType.Error,
            position: PositionType.TopRight
          }))
          this.dataSource = new MatTableDataSource<GetListProductListItemDto>(products.items);
          this.paginator.length = products.count;
          this.paginator.pageSize = products.size;
          this.paginator.pageIndex = products.index
       }

    async pageChanged(){
      await this.getProducts(); 
     }

  async ngOnInit(){
    await this.getProducts();
    this.showSpinner(SpinnerType.BallAtom);
  }
  }
  