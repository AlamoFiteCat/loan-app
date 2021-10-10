export enum LoanStatus {
    NEW = 'new',
    SENT_FOR_APPROVAL = 'sent for approval',
    APPROVED = 'approved',
    CLOSED = 'closed',
    TERMINATED = 'terminated'
}

export interface Loan {
    id: string,
    client: string,
    requestDate: Date | string,
    approvalDate: Date | string,
    status: LoanStatus,
    amount: number | string,
    installments: number | string,
    interestRate: number | string,
    principalAmount: number | string  // Amount / Installments <- monthly
    interestAmount: number | string // (Amount / Instalments) * (interestRate / 100)
}