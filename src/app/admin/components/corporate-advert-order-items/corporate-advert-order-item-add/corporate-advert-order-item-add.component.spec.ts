import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertOrderItemAddComponent } from './corporate-advert-order-item-add.component';

describe('CorporateAdvertOrderItemAddComponent', () => {
  let component: CorporateAdvertOrderItemAddComponent;
  let fixture: ComponentFixture<CorporateAdvertOrderItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertOrderItemAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertOrderItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
