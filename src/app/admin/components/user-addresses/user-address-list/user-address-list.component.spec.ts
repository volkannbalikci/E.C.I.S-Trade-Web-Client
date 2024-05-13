import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressListComponent } from './user-address-list.component';

describe('UserAddressListComponent', () => {
  let component: UserAddressListComponent;
  let fixture: ComponentFixture<UserAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAddressListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
