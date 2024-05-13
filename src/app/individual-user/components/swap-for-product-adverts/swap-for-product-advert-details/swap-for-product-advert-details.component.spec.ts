import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapForProductAdvertDetailsComponent } from './swap-for-product-advert-details.component';

describe('SwapForProductAdvertDetailsComponent', () => {
  let component: SwapForProductAdvertDetailsComponent;
  let fixture: ComponentFixture<SwapForProductAdvertDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapForProductAdvertDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapForProductAdvertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
