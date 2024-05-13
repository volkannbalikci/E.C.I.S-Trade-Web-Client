import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertPhotoPathEditComponent } from './advert-photo-path-edit.component';

describe('AdvertPhotoPathEditComponent', () => {
  let component: AdvertPhotoPathEditComponent;
  let fixture: ComponentFixture<AdvertPhotoPathEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertPhotoPathEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertPhotoPathEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
