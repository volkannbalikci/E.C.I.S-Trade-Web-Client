import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapAdvertEditComponent } from './swap-advert-edit.component';

describe('SwapAdvertEditComponent', () => {
  let component: SwapAdvertEditComponent;
  let fixture: ComponentFixture<SwapAdvertEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapAdvertEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapAdvertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
