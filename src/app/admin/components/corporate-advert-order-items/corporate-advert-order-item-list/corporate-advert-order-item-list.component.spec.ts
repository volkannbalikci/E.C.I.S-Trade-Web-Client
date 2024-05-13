import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertOrderItemListComponent } from './corporate-advert-order-item-list.component';

describe('CorporateAdvertOrderItemListComponent', () => {
  let component: CorporateAdvertOrderItemListComponent;
  let fixture: ComponentFixture<CorporateAdvertOrderItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertOrderItemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertOrderItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
