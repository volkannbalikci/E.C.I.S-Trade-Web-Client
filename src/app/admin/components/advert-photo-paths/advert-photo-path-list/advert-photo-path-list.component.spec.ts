import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertPhotoPathListComponent } from './advert-photo-path-list.component';

describe('AdvertPhotoPathListComponent', () => {
  let component: AdvertPhotoPathListComponent;
  let fixture: ComponentFixture<AdvertPhotoPathListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertPhotoPathListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertPhotoPathListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
