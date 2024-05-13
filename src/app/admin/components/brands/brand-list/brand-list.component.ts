import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { BrandService } from '../../../../services/common/models/concrete/brand.service';
import { AlertifyService, MessageType, PositionType } from '../../../../services/admin/alertify.service';
import { GetListBrandListItemDto } from '../../../../contracts/brand/getListBrandListItemDto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Paginate } from '../../../../contracts/common/paginate';
import { CreateBrandCommand } from '../../../../contracts/brand/createBrandCommand';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { ProductListInnerComponent } from '../../products/product-list-inner/product-list-inner.component';
declare var $ : any;

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css'
})
export class BrandListComponent extends BaseComponent implements OnInit {
  constructor(private brandService: BrandService, private alertfy: AlertifyService, spinner: NgxSpinnerService) {
    super(spinner)
   }
   displayedColumns: string[] = ['brandId', 'brandName', 'websiteUrl', 'delete', 'edit'];
   dataSource: MatTableDataSource<GetListBrandListItemDto> = null;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(ProductListInnerComponent) productListInner : ProductListInnerComponent;

   async getBrands(){
    let allCategories: Paginate<GetListBrandListItemDto> = await this.brandService.get(this.paginator? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5 ,() => this.hideSpinner(SpinnerType.BallAtom), errorMessage=> 
      this.alertfy.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: PositionType.TopRight
      })
    )
    this.dataSource = new MatTableDataSource<GetListBrandListItemDto>(allCategories.items);
    this.paginator.length = allCategories.count;
    this.paginator.pageSize = allCategories.size;
    this.paginator.pageIndex = allCategories.index
   }

   async getProductsByBrandId(id: string){
    console.log(id);
      this.showSpinner(SpinnerType.BallAtom);
      this.productListInner.getProductByBrandId(id);
   }

   createdBrand(createdCategory: CreateBrandCommand){
    this.getBrands();
   }

   async pageChanged(){
    await this.getBrands(); 
   }

   animation() {
    $(document).on('click','td',function() {
    alert('clicked');
    });}


  async ngOnInit() {
  this.showSpinner(SpinnerType.BallAtom);
  await this.getBrands();
  this.hideSpinner(SpinnerType.BallAtom);
  }
}
