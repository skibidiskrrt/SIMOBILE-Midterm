import { Service } from '@angular/core';

@Service()
export class DashboardService {
  totalProducts: number = 0;
  totalTransactions: number = 0;
  bestSeller: string = '-';

  constructor() {
    
  }
}