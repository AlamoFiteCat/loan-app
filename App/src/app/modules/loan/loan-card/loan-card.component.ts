import { Component, Input, OnInit } from '@angular/core';
import { Loan, LoanStatus } from 'src/app/interfaces/loan';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.css']
})
export class LoanCardComponent implements OnInit {

  constructor() { }

  @Input() displayedLoan: Loan;
  loanStatusEnum = LoanStatus;

  ngOnInit(): void {
    console.log(this.displayedLoan);   
  }

}
