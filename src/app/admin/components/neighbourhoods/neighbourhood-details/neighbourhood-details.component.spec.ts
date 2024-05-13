import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighbourhoodDetailsComponent } from './neighbourhood-details.component';

describe('NeighbourhoodDetailsComponent', () => {
  let component: NeighbourhoodDetailsComponent;
  let fixture: ComponentFixture<NeighbourhoodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeighbourhoodDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeighbourhoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
