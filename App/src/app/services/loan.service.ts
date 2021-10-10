import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Loan } from '../interfaces/loan';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(private http: HttpClient) {}

  loansDataSubject$: Subject<Loan[]> = new Subject<Loan[]>();

  fetchAllLoans() {
    this.http
      .get(`${environment.baseUrl}/loans`)
      .pipe(map((loans) => loans as Loan[]))
      .subscribe((loans: Loan[]) => {
        this.loansDataSubject$.next(loans);
      });
  }

  postNewLoan(loan: Loan) {
    this.http
      .post(`${environment.baseUrl}/loans`, loan)
      .subscribe((response) => {
        console.log(response);
        this.fetchAllLoans();
      });
  }
}
