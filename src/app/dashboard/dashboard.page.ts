import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard';

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

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
    this.totalProducts = this.dashboardservice.totalProducts
    this.totalTransactions = this.dashboardservice.totalTransactions
    this.bestSeller = this.dashboardservice.bestSeller
  }

}
