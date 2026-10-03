import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
  standalone: false,
})
export class ProductFormPage implements OnInit {

  productForm!: FormGroup;
  editId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productservice: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      purchasePrice: [0, [Validators.required, Validators.min(1)]],
      sellingPrice: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editId = Number(id);

      const product = this.productservice.products.find(
        product => product.id === this.editId
      );

      if (product) {
        this.productForm.patchValue({
          name: product.name,
          purchasePrice: product.purchasePrice,
          sellingPrice: product.sellingPrice,
          stock: product.stock
        });
      }
    }
  }

  saveProduct() {

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const data = this.productForm.value;

    if (this.editId) {

      const product = this.productservice.products.find(
        product => product.id === this.editId
      );

      if (product) {
        product.name = data.name;
        product.purchasePrice = data.purchasePrice;
        product.sellingPrice = data.sellingPrice;
        product.stock = data.stock;
      }

    } else {

      const newProduct = {
        id: this.productservice.products.length + 1,
        name: data.name,
        purchasePrice: data.purchasePrice,
        sellingPrice: data.sellingPrice,
        stock: data.stock,
        image: ''
      };
      this.productservice.products.push(newProduct);
    }
    this.router.navigate(['/tabs/products']);
  }

}