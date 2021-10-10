import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanPanelComponent } from '../loan-panel/loan-panel.component';
import { NewLoanComponent } from '../new-loan/new-loan.component';

const routes: Routes = [
  // localhost:4200/loan
  {
    path: '',
    component: LoanPanelComponent,
  },
  // localhost:4200/loan/new
  {
    path: 'new',
    component: NewLoanComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanRoutingModule {}
