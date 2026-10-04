import { ChangeDetectorRef, Component } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular/lazy';
import { CartService } from '../services/cart-service';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage {

  constructor(
    public cartservice: CartService,
    private transactionservice: TransactionService,
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private cdr: ChangeDetectorRef
  ) { }

  // the app has no zone.js, so a re-entered (cached) page must refresh itself
  ionViewWillEnter() {
    this.cdr.detectChanges();
  }

  confirmTransaction() {
    if (this.cartservice.items.length === 0) {
      return;
    }

    // 1. save the transaction (snapshot of the cart)
    this.transactionservice.add(this.cartservice.items, this.cartservice.getTotal());

    // 2. reduce the stock of every purchased product
    for (const item of this.cartservice.items) {
      item.product.stock -= item.qty;
    }

    // 3. empty the cart, then play the success animation
    this.cartservice.clear();
    this.playSuccessAnimation();
  }

  playSuccessAnimation() {
    const overlay = document.querySelector('#successOverlay') as HTMLElement;
    const icon = document.querySelector('#successIcon') as HTMLElement;
    overlay.style.display = 'flex';

    // the dark layer fades in
    const fade = this.animationCtrl
      .create()
      .addElement(overlay)
      .fromTo('opacity', '0', '1');

    // the check icon grows past its size, then settles
    const pop = this.animationCtrl
      .create()
      .addElement(icon)
      .keyframes([
        { offset: 0, transform: 'scale(0.2)' },
        { offset: 0.6, transform: 'scale(1.3)' },
        { offset: 1, transform: 'scale(1)' },
      ]);

    this.animationCtrl
      .create()
      .duration(1500)
      .addAnimation([fade, pop])
      .onFinish(() => {
        overlay.style.display = 'none';
        this.navCtrl.navigateRoot('/tabs/transactions'); // clears the stack so Back does not return to an empty cart
      })
      .play();
  }

}
