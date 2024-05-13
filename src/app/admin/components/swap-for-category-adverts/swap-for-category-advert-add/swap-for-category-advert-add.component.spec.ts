import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapForCategoryAdvertAddComponent } from './swap-for-category-advert-add.component';

describe('SwapForCategoryAdvertAddComponent', () => {
  let component: SwapForCategoryAdvertAddComponent;
  let fixture: ComponentFixture<SwapForCategoryAdvertAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapForCategoryAdvertAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapForCategoryAdvertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
