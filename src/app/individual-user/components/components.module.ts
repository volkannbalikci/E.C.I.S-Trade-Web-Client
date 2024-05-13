import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesModule } from './addresses/addresses.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { CitiesModule } from './cities/cities.module';
import { CorporateAdvertOrderItemsModule } from './corporate-advert-order-items/corporate-advert-order-items.module';
import { CorporateAdvertOrdersModule } from './corporate-advert-orders/corporate-advert-orders.module';
import { CorporateAdvertsModule } from './corporate-adverts/corporate-adverts.module';
import { CorporateUsersModule } from './corporate-users/corporate-users.module';
import { CountriesModule } from './countries/countries.module';
import { DistrictsModule } from './districts/districts.module';
import { IndividualAdvertsModule } from './individual-adverts/individual-adverts.module';
import { IndividualUsersModule } from './individual-users/individual-users.module';
import { NeighbourhoodsModule } from './neighbourhoods/neighbourhoods.module';
import { ProductsModule } from './products/products.module';
import { SwapForCategoryAdvertsModule } from './swap-for-category-adverts/swap-for-category-adverts.module';
import { SwapForProductAdvertsModule } from './swap-for-product-adverts/swap-for-product-adverts.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddressesModule,
    BrandsModule,
    CategoriesModule,
    CitiesModule,
    CorporateAdvertOrderItemsModule,
    CorporateAdvertOrdersModule,
    CorporateAdvertsModule,
    CorporateUsersModule,
    CountriesModule,
    DistrictsModule,
    IndividualAdvertsModule,
    IndividualUsersModule,
    NeighbourhoodsModule,
    ProductsModule,
    SwapForCategoryAdvertsModule,
    SwapForProductAdvertsModule
  ],
  exports:[
    CategoriesModule
  ]
})
export class ComponentsModule { }
