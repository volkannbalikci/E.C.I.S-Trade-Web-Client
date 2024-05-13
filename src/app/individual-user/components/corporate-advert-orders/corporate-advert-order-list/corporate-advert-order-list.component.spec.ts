import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertOrderListComponent } from './corporate-advert-order-list.component';

describe('CorporateAdvertOrderListComponent', () => {
  let component: CorporateAdvertOrderListComponent;
  let fixture: ComponentFixture<CorporateAdvertOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertOrderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
