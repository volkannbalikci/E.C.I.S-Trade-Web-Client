import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationClaimListComponent } from './operation-claim-list.component';

describe('OperationClaimListComponent', () => {
  let component: OperationClaimListComponent;
  let fixture: ComponentFixture<OperationClaimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationClaimListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationClaimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
