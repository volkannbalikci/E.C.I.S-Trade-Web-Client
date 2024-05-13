import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertOrderItemDetailsComponent } from './corporate-advert-order-item-details.component';

describe('CorporateAdvertOrderItemDetailsComponent', () => {
  let component: CorporateAdvertOrderItemDetailsComponent;
  let fixture: ComponentFixture<CorporateAdvertOrderItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertOrderItemDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertOrderItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
