# SIMOBILE

SIMOBILE is a mobile cashier application prototype for **Toko Makmur Jaya**, developed using **Ionic Angular** for the Hybrid Mobile Programming Midterm Project.

The application helps manage products, cart items, stock, checkout, and transaction history directly inside the application without requiring an external database or API.

## Team Members

| NRP | Name | Main Contribution |
|---|---|---|
| 160924003 | Thierry Rafael Wiranaga | CartService, TransactionService, cart & checkout, transaction history/detail, transaction animations |
| 160924007 | I Komang Aron Hendy Perkasa | Product detail, route parameter, add/edit product form and validation |
| 160923014 | Liu Ya Umaya | Product catalog, ProductService, product search/filter, product list integration |
| 160924008 | Precilia Angelyn Lim | Tabs & drawer navigation, dashboard, custom theme/dark mode, Profile, Settings, About, UI integration and documentation |

## Technologies

- Ionic Angular
- TypeScript
- HTML
- SCSS
- Capacitor

## Implemented Features

### 1. Navigation Structure
- Four main tabs: **Dashboard, Products, Transactions, Profile**
- Drawer/Side Menu containing **Settings, About, and Logout**

### 2. Dashboard
Displays:
- Total products
- Total transactions today
- Best-selling product based on recorded transaction quantities

### 3. Real-Time Product Search and Filter
- Product search updates immediately while the user types using `ngModel`
- No submit button is required
- Products can also be filtered by category

### 4. Product Details via Route Parameter
- Product detail is opened using the product ID in the route
- Displays product name, stock, purchase price, and selling price

### 5. Property and Event Binding
- Default image is displayed when a product image is unavailable
- Add-to-cart button is disabled when stock is `0`
- Cart actions use event binding
- Cart quantity badge displays the current number of items

### 6. Add and Edit Product Form
- Uses Angular Reactive Forms
- Validation includes:
  - Product name is required
  - Category is required
  - Purchase price must be greater than 0
  - Selling price must be greater than 0
  - Stock cannot be negative
- Validation messages are displayed for invalid fields
- Supports adding and editing products

### 7. Angular Services
Application data logic is separated into services:
- `ProductService`
- `CartService`
- `TransactionService`

A `DashboardService` and theme service are also used for dashboard summary and theme state.

### 8. Custom Theme and Dark Mode
- Custom pink/pastel Ionic color palette
- Light and dark mode toggle available from **Settings**
- UI elements are manually styled using Ionic components and SCSS

### 9. Animations
- Add-to-cart feedback animation
- Transaction-success animation after checkout
- Swipe-to-delete interaction using `ion-item-sliding`

### 10. Cart and Checkout
- Add products to cart
- Increase or decrease item quantity
- Quantity cannot exceed available stock
- Remove items from cart
- Automatic total calculation
- Confirm Transaction button
- Product stock is reduced after successful checkout
- Cart is cleared after the transaction is completed

### 11. Transaction History
- Displays previous transactions in the current application session
- Shows transaction date/time, item count, and total
- Each transaction can be opened to view complete item and subtotal details

### Additional Features
- Minimum 10 dummy products across multiple categories
- Category filtering
- Product add, edit, and delete actions
- Empty cart state
- Out-of-stock protection
- Toast feedback when adding products to cart
- About and Profile pages

## Installation

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git
- Ionic CLI

Install Ionic CLI globally if needed:

```bash
npm install -g @ionic/cli
```

### Clone the Repository

```bash
git clone https://github.com/skibidiskrrt/SIMOBILE-Midterm.git
cd SIMOBILE-Midterm
```

### Install Dependencies

```bash
npm install
```

## Run the Application

Run the project using Ionic:

```bash
ionic serve
```

The application will open in the browser. If it does not open automatically, use the local address displayed in the terminal.

Alternatively, the Angular development server can be started with:

```bash
npm start
```

## Build the Application

```bash
ionic build
```

The generated web build is placed in the `www` directory.

## Main Project Structure

```text
src/app/
├── about/
├── cart/
├── dashboard/
├── product/
├── product-detail/
├── product-form/
├── profile/
├── services/
│   ├── cart-service.ts
│   ├── product-service.ts
│   └── transaction-service.ts
├── settings/
├── transaction/
├── transaction-detail/
├── app-routing.module.ts
├── app.component.html
├── dashboard.ts
└── theme-mode.ts
```

## Data Storage

SIMOBILE currently stores products, cart data, and transactions locally in application services during runtime. No external database or API is required for this Midterm Project.

## Notes

This project was developed for the **Hybrid Mobile Programming Midterm Exam – Odd Semester 2026/2027** using the methods and materials covered in class.
