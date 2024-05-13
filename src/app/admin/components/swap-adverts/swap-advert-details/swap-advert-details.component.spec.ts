import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapAdvertDetailsComponent } from './swap-advert-details.component';

describe('SwapAdvertDetailsComponent', () => {
  let component: SwapAdvertDetailsComponent;
  let fixture: ComponentFixture<SwapAdvertDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapAdvertDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapAdvertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
