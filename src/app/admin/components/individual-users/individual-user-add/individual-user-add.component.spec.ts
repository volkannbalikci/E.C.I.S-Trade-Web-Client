import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualUserAddComponent } from './individual-user-add.component';

describe('IndividualUserAddComponent', () => {
  let component: IndividualUserAddComponent;
  let fixture: ComponentFixture<IndividualUserAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualUserAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
