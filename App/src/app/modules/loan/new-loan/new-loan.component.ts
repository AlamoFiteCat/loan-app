import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Loan, LoanStatus } from 'src/app/interfaces/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css'],
})
export class NewLoanComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewLoanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { numberOfLoans: number },
    private loanService: LoanService
  ) {}

  newLoanForm: FormGroup;
  minimumInstallments: number = 12;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newLoanForm = new FormGroup({
      clientName: new FormControl(null, Validators.required),
      requestAmount: new FormControl(null, Validators.required),
      numberOfInstallments: new FormControl(null, [
        Validators.required,
        Validators.min(this.minimumInstallments),
      ]),
      interestRate: new FormControl(null, [
        Validators.required,
        Validators.max(100),
      ]),
    });
  }

  onCreateLoan() {
    const { clientName, requestAmount, numberOfInstallments, interestRate } =
      this.newLoanForm.value;

    const newLoan: Loan = this.calculateLoan(
      clientName,
      new Date(),
      requestAmount,
      numberOfInstallments,
      interestRate
    );

    this.loanService.postNewLoan(newLoan);
    this.dialogRef.close();
  }

  calculateLoan(
    name: string,
    date: Date | string,
    amount: number,
    installments: number,
    interestRate: number
  ) {
    const principalAmount: number = amount / installments;
    const interestAmount = principalAmount * (interestRate / 100);

    const newLoan: Loan = {
      id: this.generateLoanID(),
      client: name,
      requestDate: date,
      approvalDate: '',
      status: LoanStatus.NEW,
      amount: amount,
      installments: installments,
      interestRate: interestRate,
      principalAmount: principalAmount.toFixed(2),
      interestAmount: interestAmount.toFixed(2),
    };
    return newLoan;
  }

  generateLoanID(): string {
    const newLoanNumber = this.data.numberOfLoans + 1;
    const digitCount = `${newLoanNumber}`.length;
    const loanID = `AGR-${'0'.repeat(4 - digitCount)}${newLoanNumber}-21`;
    return loanID;
  }
}
