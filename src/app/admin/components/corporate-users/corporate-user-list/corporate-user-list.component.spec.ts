import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserListComponent } from './corporate-user-list.component';

describe('CorporateUserListComponent', () => {
  let component: CorporateUserListComponent;
  let fixture: ComponentFixture<CorporateUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateUserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
