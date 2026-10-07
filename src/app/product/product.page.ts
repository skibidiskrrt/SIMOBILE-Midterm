import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular/lazy';
import { ProductService } from '../services/product-service';
import { CartService } from '../services/cart-service';


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
  selectedCategory: string = '';
  categories: string[] = ['Food', 'Drink', 'Snack', 'Grocery', 'Personal Care'];

  constructor(
    private productservice: ProductService,
    private router: Router,
    public cartservice: CartService,
    private animationCtrl: AnimationController,
    private toastCtrl: ToastController,
    private cdr: ChangeDetectorRef
  ) { }

  // the app has no zone.js, so a re-entered (cached) page must refresh itself
  ionViewWillEnter() {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.products = this.productservice.products;
    this.filteredProducts = this.products;
    this.categories = Array.from(
      new Set(this.products.map(product => product.category))
    );
  }

  deleteProduct(id: number) {
    this.productservice.products =
      this.productservice.products.filter(product => product.id !== id);

    this.filteredProducts = this.productservice.products;
  }

  searchProducts() {
    this.filteredProducts = [];

    for (const product of this.products) {
      const nameMatches = product.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase());

      const categoryMatches =
        this.selectedCategory === '' ||
        product.category === this.selectedCategory;

      if (nameMatches && categoryMatches) {
        this.filteredProducts.push(product);
      }
    }
  }

  viewDetail(id: number) {
    this.router.navigate(['/product-detail', id]);
  }

  async addToCart(product: any) {
    if (this.cartservice.add(product)) {
      // feedback animation: the cart button pops
      const cartButton = document.querySelector('#cartButton') as HTMLElement;
      this.animationCtrl
        .create()
        .addElement(cartButton)
        .duration(600)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.8)' },
          { offset: 1, transform: 'scale(1)' },
        ])
        .play();
      this.showToast(product.name + ' added to cart', true);
    } else {
      this.showToast('No more stock for ' + product.name, false);
    }
  }

  async showToast(message: string, withCartButton: boolean) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      buttons: withCartButton ? [{ text: 'View Cart', handler: () => { this.router.navigate(['/cart']); } }] : []
    });
    await toast.present();
  }

}
