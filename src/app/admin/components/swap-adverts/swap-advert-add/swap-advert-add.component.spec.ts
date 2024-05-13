import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapAdvertAddComponent } from './swap-advert-add.component';

describe('SwapAdvertAddComponent', () => {
  let component: SwapAdvertAddComponent;
  let fixture: ComponentFixture<SwapAdvertAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapAdvertAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapAdvertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
