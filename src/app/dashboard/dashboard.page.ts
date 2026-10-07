import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard';
import { ProductService } from '../services/product-service';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  totalProducts: number = 0;
  totalTransactions: number = 0;
  bestSeller: string = '-';

  constructor(
    private dashboardservice: DashboardService,
    private productservice: ProductService,
    private transactionservice: TransactionService
  ) { }

  ngOnInit() {
    this.updateDashboard();
  }

  ionViewWillEnter() {
    this.updateDashboard();
  }

  updateDashboard() {

    this.totalProducts = this.productservice.products.length;
    this.totalTransactions = this.transactionservice.transactions.length;
    let sales: any = {};

    for (const transaction of this.transactionservice.transactions) {
      for (const item of transaction.items) {

        if (!sales[item.name]) {
          sales[item.name] = 0;
        }

        sales[item.name] += item.qty;
      }
    }

    let bestProduct = '-';
    let bestQty = 0;

    for (const name in sales) {
      if (sales[name] > bestQty) {
        bestQty = sales[name];
        bestProduct = name;
      }
    }

    this.bestSeller = bestProduct;

    this.dashboardservice.totalProducts = this.totalProducts;
    this.dashboardservice.totalTransactions = this.totalTransactions;
    this.dashboardservice.bestSeller = this.bestSeller;
  }

}