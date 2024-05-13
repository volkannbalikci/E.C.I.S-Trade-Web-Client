import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAddComponent } from './country-add.component';

describe('CountryAddComponent', () => {
  let component: CountryAddComponent;
  let fixture: ComponentFixture<CountryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
