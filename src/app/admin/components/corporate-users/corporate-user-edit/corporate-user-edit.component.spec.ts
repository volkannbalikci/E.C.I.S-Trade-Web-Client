import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserEditComponent } from './corporate-user-edit.component';

describe('CorporateUserEditComponent', () => {
  let component: CorporateUserEditComponent;
  let fixture: ComponentFixture<CorporateUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateUserEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
