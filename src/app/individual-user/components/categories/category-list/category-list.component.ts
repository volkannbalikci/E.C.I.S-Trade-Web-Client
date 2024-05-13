import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetListResponse } from '../../../../contracts/common/getListResponse';
import { GetListCategoryListItemDto } from '../../../../contracts/category/getListCategoryListItemDto';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{
  categories: GetListCategoryListItemDto[];
  apiUrl: string = "https://localhost:44303/api/Categories?PageIndex=0&PageSize=10";
  constructor(private httpClient: HttpClient){

  }
  ngOnInit(): void {
    this.httpClient.get<GetListResponse<GetListCategoryListItemDto>>(this.apiUrl).subscribe(response =>{
      this.categories = response.items;
    })
  }

}
