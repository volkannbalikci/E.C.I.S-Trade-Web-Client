import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertOrderEditComponent } from './corporate-advert-order-edit.component';

describe('CorporateAdvertOrderEditComponent', () => {
  let component: CorporateAdvertOrderEditComponent;
  let fixture: ComponentFixture<CorporateAdvertOrderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertOrderEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
