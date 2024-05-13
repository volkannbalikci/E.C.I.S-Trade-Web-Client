import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertListComponent } from './advert-list.component';

describe('AdvertListComponent', () => {
  let component: AdvertListComponent;
  let fixture: ComponentFixture<AdvertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
