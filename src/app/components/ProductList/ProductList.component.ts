import {Component} from "@angular/core";
class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public deppartment: string[],
    public price: number
  ){}
}
@Component({
  selector: 'product-list',
  // tempalteUrl: './ProductList.template.html',
  template: `<h1>product-list</h1>`,
})
export class ProductListComponent {
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
  ngOnInit() {
    console.log("ProductListComponent");
  }
}