import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpeedCompareComponent } from './page-speed-compare.component';

describe('PageSpeedCompareComponent', () => {
  let component: PageSpeedCompareComponent;
  let fixture: ComponentFixture<PageSpeedCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSpeedCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSpeedCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
