import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAdvertListComponent } from './individual-advert-list.component';

describe('IndividualAdvertListComponent', () => {
  let component: IndividualAdvertListComponent;
  let fixture: ComponentFixture<IndividualAdvertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualAdvertListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualAdvertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
