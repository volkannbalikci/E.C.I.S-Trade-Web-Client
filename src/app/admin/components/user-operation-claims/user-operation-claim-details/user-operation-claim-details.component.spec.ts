import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationClaimDetailsComponent } from './user-operation-claim-details.component';

describe('UserOperationClaimDetailsComponent', () => {
  let component: UserOperationClaimDetailsComponent;
  let fixture: ComponentFixture<UserOperationClaimDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOperationClaimDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOperationClaimDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
