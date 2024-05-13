import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertEditComponent } from './advert-edit.component';

describe('AdvertEditComponent', () => {
  let component: AdvertEditComponent;
  let fixture: ComponentFixture<AdvertEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
