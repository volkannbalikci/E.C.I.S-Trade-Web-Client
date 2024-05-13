import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualUserListComponent } from './individual-user-list.component';

describe('IndividualUserListComponent', () => {
  let component: IndividualUserListComponent;
  let fixture: ComponentFixture<IndividualUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualUserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
