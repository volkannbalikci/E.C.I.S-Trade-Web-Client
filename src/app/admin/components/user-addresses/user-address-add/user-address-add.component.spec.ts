import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressAddComponent } from './user-address-add.component';

describe('UserAddressAddComponent', () => {
  let component: UserAddressAddComponent;
  let fixture: ComponentFixture<UserAddressAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAddressAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
