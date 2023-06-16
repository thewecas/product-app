import { Component } from '@angular/core';
import { deleteProduct, products } from "../products";
// declare var console: any;
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']

})
export class ProductListingComponent {
  // products: any[] = [];
  products = [...products];
  eeNgOnChangersFeature() {

  }
  calltoDelete(id: number) {
    deleteProduct(id);
  }
}
