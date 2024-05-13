import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapForProductAdvertAddComponent } from './swap-for-product-advert-add.component';

describe('SwapForProductAdvertAddComponent', () => {
  let component: SwapForProductAdvertAddComponent;
  let fixture: ComponentFixture<SwapForProductAdvertAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapForProductAdvertAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapForProductAdvertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
