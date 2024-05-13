import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertOrderItemEditComponent } from './corporate-advert-order-item-edit.component';

describe('CorporateAdvertOrderItemEditComponent', () => {
  let component: CorporateAdvertOrderItemEditComponent;
  let fixture: ComponentFixture<CorporateAdvertOrderItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertOrderItemEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertOrderItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
