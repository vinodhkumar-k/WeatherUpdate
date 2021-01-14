import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityIconComponent } from './air-quality-icon.component';

describe('AirQualityIconComponent', () => {
  let component: AirQualityIconComponent;
  let fixture: ComponentFixture<AirQualityIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirQualityIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirQualityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
