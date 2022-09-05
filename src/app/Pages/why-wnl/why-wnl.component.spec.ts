import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWnlComponent } from './why-wnl.component';

describe('WhyWnlComponent', () => {
  let component: WhyWnlComponent;
  let fixture: ComponentFixture<WhyWnlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyWnlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
