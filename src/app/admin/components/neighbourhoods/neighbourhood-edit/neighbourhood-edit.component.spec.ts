import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighbourhoodEditComponent } from './neighbourhood-edit.component';

describe('NeighbourhoodEditComponent', () => {
  let component: NeighbourhoodEditComponent;
  let fixture: ComponentFixture<NeighbourhoodEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeighbourhoodEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeighbourhoodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
