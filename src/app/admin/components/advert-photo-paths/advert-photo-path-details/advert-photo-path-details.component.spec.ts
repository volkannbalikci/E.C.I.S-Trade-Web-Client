import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertPhotoPathDetailsComponent } from './advert-photo-path-details.component';

describe('AdvertPhotoPathDetailsComponent', () => {
  let component: AdvertPhotoPathDetailsComponent;
  let fixture: ComponentFixture<AdvertPhotoPathDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertPhotoPathDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertPhotoPathDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
