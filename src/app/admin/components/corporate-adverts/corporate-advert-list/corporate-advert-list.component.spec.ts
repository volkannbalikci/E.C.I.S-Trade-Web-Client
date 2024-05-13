import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdvertListComponent } from './corporate-advert-list.component';

describe('CorporateAdvertListComponent', () => {
  let component: CorporateAdvertListComponent;
  let fixture: ComponentFixture<CorporateAdvertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateAdvertListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdvertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
