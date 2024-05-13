import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressAddComponent } from './address-add.component';

describe('AddressAddComponent', () => {
  let component: AddressAddComponent;
  let fixture: ComponentFixture<AddressAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
