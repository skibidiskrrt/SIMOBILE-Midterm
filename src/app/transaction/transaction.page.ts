import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
  standalone: false,
})
export class TransactionPage {

  constructor(
    public transactionservice: TransactionService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  // the app has no zone.js, so a re-entered (cached) page must refresh itself
  ionViewWillEnter() {
    this.cdr.detectChanges();
  }

  viewDetail(id: number) {
    this.router.navigate(['/transaction-detail', id]);
  }

}
