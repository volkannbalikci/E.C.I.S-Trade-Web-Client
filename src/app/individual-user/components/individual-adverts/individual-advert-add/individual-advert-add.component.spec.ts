import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAdvertAddComponent } from './individual-advert-add.component';

describe('IndividualAdvertAddComponent', () => {
  let component: IndividualAdvertAddComponent;
  let fixture: ComponentFixture<IndividualAdvertAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualAdvertAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualAdvertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
