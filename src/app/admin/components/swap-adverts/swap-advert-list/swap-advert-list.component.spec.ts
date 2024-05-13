import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapAdvertListComponent } from './swap-advert-list.component';

describe('SwapAdvertListComponent', () => {
  let component: SwapAdvertListComponent;
  let fixture: ComponentFixture<SwapAdvertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwapAdvertListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapAdvertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
