import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertPhotoPathAddComponent } from './advert-photo-path-add.component';

describe('AdvertPhotoPathAddComponent', () => {
  let component: AdvertPhotoPathAddComponent;
  let fixture: ComponentFixture<AdvertPhotoPathAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertPhotoPathAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertPhotoPathAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
