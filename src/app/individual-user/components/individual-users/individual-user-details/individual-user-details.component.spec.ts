import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualUserDetailsComponent } from './individual-user-details.component';

describe('IndividualUserDetailsComponent', () => {
  let component: IndividualUserDetailsComponent;
  let fixture: ComponentFixture<IndividualUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualUserDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
