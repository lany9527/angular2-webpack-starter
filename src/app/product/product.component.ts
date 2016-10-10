import {ViewChild, ViewChildren, Component} from '@angular/core';
import {ProductListComponent} from "../components/ProductList/ProductList.component";

@Component({
  selector: 'product',
  directives: [ProductListComponent],
  templateUrl: './product.template.html',

})

export class Product {
  ngOnInit() {
    console.log("product");
  }
}
;