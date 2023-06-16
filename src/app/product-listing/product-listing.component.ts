import { Component } from '@angular/core';
import { deleteProduct, products } from "../products";
// declare var console: any;
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']

})
export class ProductListingComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert("you will be notified when the product goes on sale");
  }
  calltoDelete(id: number) {
    deleteProduct(id);
  }
}
