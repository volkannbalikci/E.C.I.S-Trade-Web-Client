import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictAddComponent } from './district-add.component';

describe('DistrictAddComponent', () => {
  let component: DistrictAddComponent;
  let fixture: ComponentFixture<DistrictAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrictAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
