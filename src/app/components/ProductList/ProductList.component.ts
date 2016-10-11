import {Component, EventEmitter} from "@angular/core";
class Product {
  constructor(public sku: string,
              public name: string,
              public imageUrl: string,
              public department: string[],
              public price: number) {
  }
}
//product-image
@Component({
  selector: 'product-image',
  inputs: ['product'],
  styleUrls: ['./ProductList.component.css'],
  template: `
  <div class="product-image">
    <img [src]="product.imageUrl" alt="">
  </div>
`
})
class ProductImage {
  product: Product;
}

//product-department
@Component({
  selector: 'product-department',
  inputs: ['product'],
  styleUrls: ['./ProductList.component.css'],
  template: `
  <div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
      <a class="product-nav" href="#">{{ name }}</a>
      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
    </span>
  </div>
`
})
class ProductDepartment {
  product: Product;
}

//product-price
@Component({
  selector: 'product-price',
  inputs: ['price'],
  styleUrls: ['./ProductList.component.css'],
  template: `
  <div class="product-price"> \${{ price }} </div>
`
})
class ProductPrice {

}

//product-row
@Component({
  selector: 'product-row',
  inputs: ['product'],
  directives: [ProductImage, ProductDepartment, ProductPrice],
  styleUrls: ['./ProductList.component.css'],
  template: `
  <div  class="product-row">
    <product-image [product]="product"></product-image>
    <div class="product-info">
      <div class="product-name">{{product.name}}</div>
      <div class="product-sku">SKU #{{product.sku}}</div>
      <product-department [product]="product"></product-department>
    </div>
    <product-price [price]="product.price"></product-price>
  </div>
`
})
class ProductRow {
  product: Product;
}

//products-list
@Component({
  selector: 'products-list',
  directives: [ProductRow],
  styleUrls: ['./ProductList.component.css'],
  inputs: ['productList'],
  template: `
    <product-row
     *ngFor="let myProduct of productList"
     [product]="myProduct"
     ></product-row>
`
})
class ProductsList {
  productList: Product[];
}

//inventory-app
@Component({
  selector: 'inventory-app',
  directives: [ProductsList],
  styleUrls: ['./ProductList.component.css'],
  template: `
  <div class="inventory-app">
    <products-list
      [productList]="products"
    >
    </products-list>
  </div>
  `
})


export class InventoryApp {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES', 'Black Running Shoes',
        '../../../resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET', 'Blue Jacket',
        '../../../resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT', 'A Nice Black Hat',
        '../../../resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}