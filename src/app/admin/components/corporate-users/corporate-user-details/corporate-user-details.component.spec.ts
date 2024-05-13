import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserDetailsComponent } from './corporate-user-details.component';

describe('CorporateUserDetailsComponent', () => {
  let component: CorporateUserDetailsComponent;
  let fixture: ComponentFixture<CorporateUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateUserDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
