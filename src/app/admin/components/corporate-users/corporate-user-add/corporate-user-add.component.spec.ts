import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserAddComponent } from './corporate-user-add.component';

describe('CorporateUserAddComponent', () => {
  let component: CorporateUserAddComponent;
  let fixture: ComponentFixture<CorporateUserAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateUserAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
