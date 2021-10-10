import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanPanelComponent } from './loan-panel/loan-panel.component';
import { LoanCardComponent } from './loan-card/loan-card.component';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { LoanRoutingModule } from './loan-routing/loan-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoanPanelComponent,
    LoanCardComponent,
    NewLoanComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class LoanModule { }
