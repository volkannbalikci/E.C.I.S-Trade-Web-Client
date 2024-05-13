import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAdvertEditComponent } from './individual-advert-edit.component';

describe('IndividualAdvertEditComponent', () => {
  let component: IndividualAdvertEditComponent;
  let fixture: ComponentFixture<IndividualAdvertEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualAdvertEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualAdvertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
