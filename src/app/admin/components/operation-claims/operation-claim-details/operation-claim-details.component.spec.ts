import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationClaimDetailsComponent } from './operation-claim-details.component';

describe('OperationClaimDetailsComponent', () => {
  let component: OperationClaimDetailsComponent;
  let fixture: ComponentFixture<OperationClaimDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationClaimDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationClaimDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
