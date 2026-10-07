import { Service } from '@angular/core';

@Service()
export class TransactionService {
    transactions: any[] = [];
    nextId: number = 1;

    constructor() {

    }

    // copies the cart items into a new transaction (a snapshot, so later product edits do not change history)
    add(cartItems: any[], total: number) {
        const transaction = {
            id: this.nextId++,
            date: new Date(),
            total: total,
            items: cartItems.map(i => ({
                productId: i.product.id,
                name: i.product.name,
                price: i.product.sellingPrice,
                qty: i.qty,
                subtotal: i.product.sellingPrice * i.qty
            }))
        };

        this.transactions.unshift(transaction); // newest first
        return transaction;
    }

    getById(id: number) {
        return this.transactions.find(t => t.id === id);
    }
}
