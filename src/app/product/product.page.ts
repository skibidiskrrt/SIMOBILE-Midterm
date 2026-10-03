import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: false,
})
export class ProductPage implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  searchText: string = '';

  constructor(
    private productservice: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productservice.products;
    this.filteredProducts = this.products;
  }

  deleteProduct(id: number) {
    this.productservice.products =
      this.productservice.products.filter(product => product.id !== id);

    this.filteredProducts = this.productservice.products;
  }

  searchProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  viewDetail(id: number) {
    this.router.navigate(['/product-detail', id]);
  }

  addToCart(product: any) {
    console.log('Add to cart:', product);
  }

}
