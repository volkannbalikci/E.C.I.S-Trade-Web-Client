import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapForCategoryAdvertListComponent } from './swap-for-category-advert-list.component';

describe('SwapForCategoryAdvertListComponent', () => {
  let component: SwapForCategoryAdvertListComponent;
  let fixture: ComponentFixture<SwapForCategoryAdvertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapForCategoryAdvertListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapForCategoryAdvertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
