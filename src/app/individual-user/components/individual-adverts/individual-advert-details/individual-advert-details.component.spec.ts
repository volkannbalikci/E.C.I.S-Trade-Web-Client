import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAdvertDetailsComponent } from './individual-advert-details.component';

describe('IndividualAdvertDetailsComponent', () => {
  let component: IndividualAdvertDetailsComponent;
  let fixture: ComponentFixture<IndividualAdvertDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualAdvertDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualAdvertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
