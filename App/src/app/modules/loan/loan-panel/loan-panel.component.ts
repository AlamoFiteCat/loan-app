import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Loan } from 'src/app/interfaces/loan';
import { LoanService } from 'src/app/services/loan.service';
import { NewLoanComponent } from '../new-loan/new-loan.component';

@Component({
  selector: 'app-loan-panel',
  templateUrl: './loan-panel.component.html',
  styleUrls: ['./loan-panel.component.css'],
})
export class LoanPanelComponent implements OnInit, OnDestroy {
  constructor(private loanService: LoanService, public dialog: MatDialog) {}
  loanList: Loan[];
  loanSubscription: Subscription;
  dataSource = new MatTableDataSource<Loan>();
  loanToDisplay: Loan;
  displayedColumns: string[] = ['id', 'client', 'status', 'amount'];

  ngOnInit(): void {
    this.loanSubscription = this.loanService.loansDataSubject$.subscribe(
      (payload: Loan[]) => {
        this.loanList = payload;
        this.dataSource.data = this.loanList;
        console.log(this.loanList);
      }
    );
    this.loanService.fetchAllLoans();
  }
  ngOnDestroy() {
    this.loanSubscription.unsubscribe();
  }
  onDisplayLoan(loan: Loan) {
    this.loanToDisplay = loan;
  }
  onOpenDialog() {
    const dialogRef = this.dialog.open(NewLoanComponent, {
      data: {
        numberOfLoans: this.loanList.length,
      },
    });
  }
}
