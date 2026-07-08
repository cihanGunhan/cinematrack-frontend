import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rezervasyon } from './rezervasyon';

describe('Rezervasyon', () => {
  let component: Rezervasyon;
  let fixture: ComponentFixture<Rezervasyon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rezervasyon],
    }).compileComponents();

    fixture = TestBed.createComponent(Rezervasyon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
