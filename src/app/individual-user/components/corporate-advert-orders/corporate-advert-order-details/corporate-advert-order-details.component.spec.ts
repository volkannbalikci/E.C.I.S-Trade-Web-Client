import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertOrderDetailsComponent } from './corporate-advert-order-details.component';

describe('CorporateAdvertOrderDetailsComponent', () => {
  let component: CorporateAdvertOrderDetailsComponent;
  let fixture: ComponentFixture<CorporateAdvertOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertOrderDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
