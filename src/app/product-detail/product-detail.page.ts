import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular/lazy';
import { ProductService } from '../services/product-service';
import { CartService } from '../services/cart-service';

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
    private productservice: ProductService,
    public cartservice: CartService,
    private animationCtrl: AnimationController,
    private toastCtrl: ToastController,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  // the app has no zone.js, so a re-entered (cached) page must refresh itself
  ionViewWillEnter() {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.productservice.products.find(
      product => product.id === id
    );
  }
  async addToCart(product: any) {
    if (this.cartservice.add(product)) {
      // feedback animation: the Add button and the header cart button pop
      const buttons = document.querySelectorAll('#addToCartButton, #cartButtonDetail');
      this.animationCtrl
        .create()
        .addElement(buttons)
        .duration(600)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.5)' },
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