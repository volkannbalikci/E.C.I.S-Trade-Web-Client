import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertEditComponent } from './corporate-advert-edit.component';

describe('CorporateAdvertEditComponent', () => {
  let component: CorporateAdvertEditComponent;
  let fixture: ComponentFixture<CorporateAdvertEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
