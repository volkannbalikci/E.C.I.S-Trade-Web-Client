import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationClaimEditComponent } from './operation-claim-edit.component';

describe('OperationClaimEditComponent', () => {
  let component: OperationClaimEditComponent;
  let fixture: ComponentFixture<OperationClaimEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationClaimEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationClaimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
