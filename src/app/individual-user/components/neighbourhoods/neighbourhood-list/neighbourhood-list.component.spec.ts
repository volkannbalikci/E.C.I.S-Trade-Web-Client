import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighbourhoodListComponent } from './neighbourhood-list.component';

describe('NeighbourhoodListComponent', () => {
  let component: NeighbourhoodListComponent;
  let fixture: ComponentFixture<NeighbourhoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeighbourhoodListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeighbourhoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
