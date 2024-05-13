import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertDetailsComponent } from './corporate-advert-details.component';

describe('CorporateAdvertDetailsComponent', () => {
  let component: CorporateAdvertDetailsComponent;
  let fixture: ComponentFixture<CorporateAdvertDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
