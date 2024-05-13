import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertAddComponent } from './advert-add.component';

describe('AdvertAddComponent', () => {
  let component: AdvertAddComponent;
  let fixture: ComponentFixture<AdvertAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
