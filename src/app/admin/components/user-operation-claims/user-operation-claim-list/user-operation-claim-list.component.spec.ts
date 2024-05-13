import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationClaimListComponent } from './user-operation-claim-list.component';

describe('UserOperationClaimListComponent', () => {
  let component: UserOperationClaimListComponent;
  let fixture: ComponentFixture<UserOperationClaimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOperationClaimListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOperationClaimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
