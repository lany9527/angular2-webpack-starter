import {ViewChild, ViewChildren, Component} from '@angular/core';
import {InventoryApp} from "../components/ProductList/ProductList.component";

@Component({
  selector: 'product',
  directives: [InventoryApp],
  templateUrl: './product.template.html',

})

export class Product {
  ngOnInit() {
    console.log("product");
  }
}
;