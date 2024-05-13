import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapForProductAdvertListComponent } from './swap-for-product-advert-list.component';

describe('SwapForProductAdvertListComponent', () => {
  let component: SwapForProductAdvertListComponent;
  let fixture: ComponentFixture<SwapForProductAdvertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapForProductAdvertListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapForProductAdvertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
