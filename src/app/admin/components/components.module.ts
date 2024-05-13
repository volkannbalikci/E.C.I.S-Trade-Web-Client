import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesModule } from './addresses/addresses.module';
import { AdminsModule } from './admins/admins.module';
import { AdvertPhotoPathsModule } from './advert-photo-paths/advert-photo-paths.module';
import { AdvertsModule } from './adverts/adverts.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { CitiesModule } from './cities/cities.module';
import { CorporateAdvertsModule } from './corporate-adverts/corporate-adverts.module';
import { CountriesModule } from './countries/countries.module';
import { CorporateUsersModule } from './corporate-users/corporate-users.module';
import { DistrictsModule } from './districts/districts.module';
import { IndividualAdvertsModule } from './individual-adverts/individual-adverts.module';
import { IndividualUsersModule } from './individual-users/individual-users.module';
import { OperationClaimsModule } from './operation-claims/operation-claims.module';
import { ProductsModule } from './products/products.module';
import { UserAddressesModule } from './user-addresses/user-addresses.module';
import { UserOperationClaimsModule } from './user-operation-claims/user-operation-claims.module';
import { UsersModule } from './users/users.module';
import { CorporateAdvertOrderItemsModule } from './corporate-advert-order-items/corporate-advert-order-items.module';
import { CorporateAdvertOrdersModule } from './corporate-advert-orders/corporate-advert-orders.module';
import { NeighbourhoodsModule } from './neighbourhoods/neighbourhoods.module';
import { SwapAdvertsModule } from './swap-adverts/swap-adverts.module';
import { SwapForCategoryAdvertsModule } from './swap-for-category-adverts/swap-for-category-adverts.module';
import { SwapForProductAdvertsModule } from './swap-for-product-adverts/swap-for-product-adverts.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AddressesModule,
    AdminsModule,
    AdvertPhotoPathsModule,
    AdvertsModule,
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
    OperationClaimsModule,
    ProductsModule,
    SwapAdvertsModule,
    SwapForCategoryAdvertsModule,
    SwapForProductAdvertsModule,
    UserAddressesModule,
    UserOperationClaimsModule,
    UsersModule
  ]
})
export class ComponentsModule { }
