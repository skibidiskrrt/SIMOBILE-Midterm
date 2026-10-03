import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false,
})
export class ProductDetailPage implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.productservice.products.find(
      product => product.id === id
    );
  }
  addToCart(product: any) {
    console.log('Add to Cart:', product);
  }

}