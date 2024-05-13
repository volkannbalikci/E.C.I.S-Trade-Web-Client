import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualUserEditComponent } from './individual-user-edit.component';

describe('IndividualUserEditComponent', () => {
  let component: IndividualUserEditComponent;
  let fixture: ComponentFixture<IndividualUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualUserEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
