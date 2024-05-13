import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapForCategoryAdvertEditComponent } from './swap-for-category-advert-edit.component';

describe('SwapForCategoryAdvertEditComponent', () => {
  let component: SwapForCategoryAdvertEditComponent;
  let fixture: ComponentFixture<SwapForCategoryAdvertEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapForCategoryAdvertEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapForCategoryAdvertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
