import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertOrderAddComponent } from './corporate-advert-order-add.component';

describe('CorporateAdvertOrderAddComponent', () => {
  let component: CorporateAdvertOrderAddComponent;
  let fixture: ComponentFixture<CorporateAdvertOrderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertOrderAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertOrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
