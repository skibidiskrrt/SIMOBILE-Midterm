import { Service } from '@angular/core';

@Service() 
export class ProductService {
    products: any[] = [
        {
  id: 1,
  name: 'Indomie Goreng',
  category: 'Food',
  purchasePrice: 2500,
  sellingPrice: 3500,
  stock: 20,
  image: 'https://www.indomie.co.id/Content/Product/indomie-goreng-spesial-plus_big.png'
},
{
  id: 2,
  name: 'Indomie Soto',
  category: 'Food',
  purchasePrice: 2500,
  sellingPrice: 3500,
  stock: 15,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8bEceJbwArC4dnSU5WIB3J3R7_GcVd6vLbddidC9sA&s=10'
},
{
  id: 3,
  name: 'Prestine 600ml',
  category: 'Drink',
  purchasePrice: 2000,
  sellingPrice: 3000,
  stock: 30,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhsKVGu_r53eKwkHBat6MzGgoZNGtrFoI37QbbMjvXw&s=10'
},
{
  id: 4,
  name: 'Teh Kotak',
  category: 'Drink',
  purchasePrice: 2500,
  sellingPrice: 5000,
  stock: 25,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHXTvE4KpEY6S4hkcLSL26YXc2f70Bpow6QP60d8grw&s=10'
},
{
  id: 5,
  name: 'Beng-Beng',
  category: 'Snack',
  purchasePrice: 1500,
  sellingPrice: 2500,
  stock: 18,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDJBxYzkIyGGOPJYY5OwyAR8So6gCIji3oAqB4bNv6g&s=10'
},
{
  id: 6,
  name: 'Chitato Lite Seaweed',
  category: 'Snack',
  purchasePrice: 7000,
  sellingPrice: 9000,
  stock: 12,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73CibFGXYijgpHz8RKjNLHeFlMzh_ZYGVgsvgkCp_Aw&s=10'
},
{
  id: 7,
  name: 'Gulaku kuning 1kg',
  category: 'Grocery',
  purchasePrice: 15000,
  sellingPrice: 18000,
  stock: 10,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBHYQaKwhMhfH2YpBvv_B07OtTQo-SnTOp_fFJYRgaw&s=10'
},
{
  id: 8,
  name: 'Minyak Goreng 1L',
  category: 'Grocery',
  purchasePrice: 16000,
  sellingPrice: 19000,
  stock: 8,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKcI10zZYP9_AiJbnrpXIlmmd833eVzNvSnBJoph9dQ&s=10'
},
{
  id: 9,
  name: 'Susu Ultra Milk',
  category: 'Drink',
  purchasePrice: 5000,
  sellingPrice: 7000,
  stock: 14,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHp6GLoowMoGuJvwASzFVVgevYTK9BA-tFNetpMMf9A&s=10'
},
{
  id: 10,
  name: 'Minyak Telon My Baby 60 ml',
  category: 'Personal Care',
  purchasePrice: 15000,
  sellingPrice: 19000,
  stock: 16,
  image: 'https://d2qjkwm11akmwu.cloudfront.net/products/396145_7-8-2023_13-57-27.webp'
}
    ];

    constructor(){

    }
}
