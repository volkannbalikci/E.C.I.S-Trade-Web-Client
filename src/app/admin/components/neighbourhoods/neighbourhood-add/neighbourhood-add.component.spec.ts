import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighbourhoodAddComponent } from './neighbourhood-add.component';

describe('NeighbourhoodAddComponent', () => {
  let component: NeighbourhoodAddComponent;
  let fixture: ComponentFixture<NeighbourhoodAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeighbourhoodAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeighbourhoodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
