import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListInnerComponent } from './product-list-inner.component';

describe('ProductListInnerComponent', () => {
  let component: ProductListInnerComponent;
  let fixture: ComponentFixture<ProductListInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListInnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
