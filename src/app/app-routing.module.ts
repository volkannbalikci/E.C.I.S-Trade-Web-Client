import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent as AdminLayoutComponent } from './admin/layout/layout.component';
import { LayoutComponent as IndividualUserLayoutComponent } from './individual-user/layout/layout.component';

const routes: Routes = [
  {path: "", component: IndividualUserLayoutComponent},
  {path: "admin", component: AdminLayoutComponent, children: [
    {path: "addresses", loadChildren : () => import("./admin/components/addresses/addresses.module").then(module => module.AddressesModule)},
    {path: "admins", loadChildren : () => import("./admin/components/admins/admins.module").then(module => module.AdminsModule)},
    {path: "advert-photo-paths", loadChildren : () => import("./admin/components/advert-photo-paths/advert-photo-paths.module").then(module => module.AdvertPhotoPathsModule)},
    {path: "adverts", loadChildren : () => import("./admin/components/adverts/adverts.module").then(module => module.AdvertsModule)},
    {path: "brands", loadChildren : () => import("./admin/components/brands/brands.module").then(module => module.BrandsModule)},
    {path: "categories", loadChildren : () => import("./admin/components/categories/categories.module").then(module => module.CategoriesModule)},
    {path: "cities", loadChildren : () => import("./admin/components/cities/cities.module").then(module => module.CitiesModule)},
    {path: "corporate-advert-order-items", loadChildren : () => import("./admin/components/corporate-advert-order-items/corporate-advert-order-items.module").then(module => module.CorporateAdvertOrderItemsModule)},
    {path: "corporate-advert-orders", loadChildren : () => import("./admin/components/corporate-advert-orders/corporate-advert-orders.module").then(module => module.CorporateAdvertOrdersModule)},
    {path: "corporate-adverts", loadChildren : () => import("./admin/components/corporate-adverts/corporate-adverts.module").then(module => module.CorporateAdvertsModule)},
    {path: "corporate-users", loadChildren : () => import("./admin/components/corporate-users/corporate-users.module").then(module => module.CorporateUsersModule)},
    {path: "countries", loadChildren : () => import("./admin/components/countries/countries.module").then(module => module.CountriesModule)},
    {path: "districts", loadChildren : () => import("./admin/components/districts/districts.module").then(module => module.DistrictsModule)},
    {path: "individual-adverts", loadChildren : () => import("./admin/components/individual-adverts/individual-adverts.module").then(module => module.IndividualAdvertsModule)},
    {path: "individual-users", loadChildren : () => import("./admin/components/individual-users/individual-users.module").then(module => module.IndividualUsersModule)},
    {path: "neighbourhoods", loadChildren : () => import("./admin/components/neighbourhoods/neighbourhoods.module").then(module => module.NeighbourhoodsModule)},
    {path: "operation-claims", loadChildren : () => import("./admin/components/operation-claims/operation-claims.module").then(module => module.OperationClaimsModule)},
    {path: "products", loadChildren : () => import("./admin/components/products/products.module").then(module => module.ProductsModule)},
    {path: "swap-adverts", loadChildren : () => import("./admin/components/swap-adverts/swap-adverts.module").then(module => module.SwapAdvertsModule)},
    {path: "swap-for-category-adverts", loadChildren : () => import("./admin/components/swap-for-category-adverts/swap-for-category-adverts.module").then(module => module.SwapForCategoryAdvertsModule)},
    {path: "swap-for-product-adverts", loadChildren : () => import("./admin/components/swap-for-product-adverts/swap-for-product-adverts.module").then(module => module.SwapForProductAdvertsModule)},
    {path: "user-addresses", loadChildren : () => import("./admin/components/user-addresses/user-addresses.module").then(module => module.UserAddressesModule)},
    {path: "user-operation-claims", loadChildren : () => import("./admin/components/user-operation-claims/user-operation-claims.module").then(module => module.UserOperationClaimsModule)},
    {path: "users", loadChildren : () => import("./admin/components/users/users.module").then(module => module.UsersModule)},
  ]},

  {path: "individual-user", component: IndividualUserLayoutComponent, children: [
    {path: "addresses", loadChildren : () => import("./individual-user/components/addresses/addresses.module").then(module => module.AddressesModule)},
    {path: "brands", loadChildren : () => import("./individual-user/components/brands/brands.module").then(module => module.BrandsModule)},
    {path: "categories", loadChildren : () => import("./individual-user/components/categories/categories.module").then(module => module.CategoriesModule)},
    {path: "cities", loadChildren : () => import("./individual-user/components/cities/cities.module").then(module => module.CitiesModule)},
    {path: "corporate-advert-order-items", loadChildren : () => import("./individual-user/components/corporate-advert-order-items/corporate-advert-order-items.module").then(module => module.CorporateAdvertOrderItemsModule)},
    {path: "corporate-advert-orders", loadChildren : () => import("./individual-user/components/corporate-advert-orders/corporate-advert-orders.module").then(module => module.CorporateAdvertOrdersModule)},
    {path: "corporate-adverts", loadChildren : () => import("./individual-user/components/corporate-adverts/corporate-adverts.module").then(module => module.CorporateAdvertsModule)},
    {path: "corporate-users", loadChildren : () => import("./individual-user/components/corporate-users/corporate-users.module").then(module => module.CorporateUsersModule)},
    {path: "countries", loadChildren : () => import("./individual-user/components/countries/countries.module").then(module => module.CountriesModule)},
    {path: "districts", loadChildren : () => import("./individual-user/components/districts/districts.module").then(module => module.DistrictsModule)},
    {path: "individual-adverts", loadChildren : () => import("./individual-user/components/individual-adverts/individual-adverts.module").then(module => module.IndividualAdvertsModule)},
    {path: "individual-users", loadChildren : () => import("./individual-user/components/individual-users/individual-users.module").then(module => module.IndividualUsersModule)},
    {path: "neighbourhoods", loadChildren : () => import("./individual-user/components/neighbourhoods/neighbourhoods.module").then(module => module.NeighbourhoodsModule)},
    {path: "products", loadChildren : () => import("./individual-user/components/products/products.module").then(module => module.ProductsModule)},
    {path: "swap-for-category-adverts", loadChildren : () => import("./individual-user/components/swap-for-category-adverts/swap-for-category-adverts.module").then(module => module.SwapForCategoryAdvertsModule)},
    {path: "swap-for-product-adverts", loadChildren : () => import("./individual-user/components/swap-for-product-adverts/swap-for-product-adverts.module").then(module => module.SwapForProductAdvertsModule)},
  ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
