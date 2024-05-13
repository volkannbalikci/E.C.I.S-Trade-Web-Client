import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationClaimEditComponent } from './user-operation-claim-edit.component';

describe('UserOperationClaimEditComponent', () => {
  let component: UserOperationClaimEditComponent;
  let fixture: ComponentFixture<UserOperationClaimEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOperationClaimEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOperationClaimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
