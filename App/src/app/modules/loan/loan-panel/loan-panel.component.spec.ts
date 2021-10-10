import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPanelComponent } from './loan-panel.component';

describe('LoanPanelComponent', () => {
  let component: LoanPanelComponent;
  let fixture: ComponentFixture<LoanPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
