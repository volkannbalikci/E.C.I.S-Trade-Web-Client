import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertAddComponent } from './corporate-advert-add.component';

describe('CorporateAdvertAddComponent', () => {
  let component: CorporateAdvertAddComponent;
  let fixture: ComponentFixture<CorporateAdvertAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
