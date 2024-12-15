import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllCitiesForecastComponent } from './all-cities-forecast.component';

describe('AllCitiesForecastComponent', () => {
  let component: AllCitiesForecastComponent;
  let fixture: ComponentFixture<AllCitiesForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCitiesForecastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCitiesForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
