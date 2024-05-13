import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapForProductAdvertEditComponent } from './swap-for-product-advert-edit.component';

describe('SwapForProductAdvertEditComponent', () => {
  let component: SwapForProductAdvertEditComponent;
  let fixture: ComponentFixture<SwapForProductAdvertEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapForProductAdvertEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapForProductAdvertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
