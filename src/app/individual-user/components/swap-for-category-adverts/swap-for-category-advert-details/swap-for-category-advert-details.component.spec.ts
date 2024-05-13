import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapForCategoryAdvertDetailsComponent } from './swap-for-category-advert-details.component';

describe('SwapForCategoryAdvertDetailsComponent', () => {
  let component: SwapForCategoryAdvertDetailsComponent;
  let fixture: ComponentFixture<SwapForCategoryAdvertDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapForCategoryAdvertDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapForCategoryAdvertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
