import { Service } from '@angular/core';

@Service()
export class CartService {
    // each item: { product: <product object from ProductService>, qty: number }
    items: any[] = [];

    constructor() {

    }

    // returns false if the product cannot be added (out of stock / all stock already in cart)
    add(product: any): boolean {
        const item = this.items.find(i => i.product.id === product.id);

        if (item) {
            if (item.qty >= product.stock) {
                return false;
            }
            item.qty++;
        } else {
            if (product.stock <= 0) {
                return false;
            }
            this.items.push({ product: product, qty: 1 });
        }
        return true;
    }

    increase(item: any) {
        if (item.qty < item.product.stock) {
            item.qty++;
        }
    }

    decrease(item: any) {
        if (item.qty > 1) {
            item.qty--;
        } else {
            this.remove(item);
        }
    }

    remove(item: any) {
        this.items = this.items.filter(i => i !== item);
    }

    // total quantity of all items (used by the cart badge)
    getCount(): number {
        let count = 0;
        for (const item of this.items) {
            count += item.qty;
        }
        return count;
    }

    getTotal(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.product.sellingPrice * item.qty;
        }
        return total;
    }

    clear() {
        this.items = [];
    }
}
