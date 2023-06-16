import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { addProduct, products } from "../products";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {

  form = new FormGroup({
    name: new FormControl(),
    desc: new FormControl(),
    price: new FormControl(),

  });
  addProduct() {
    console.log(this.form.value);
    let productId = Math.max(...products.map((obj: { id: any; }) => obj.id)) + 1;
    console.log(productId);
    productId = (productId).toString() == "-Infinity" ? 1 : productId;


    addProduct({
      "id": productId,
      "name": this.form.value.name,
      "description": this.form.value.desc,
      "price": this.form.value.price

    });

  }



}

function subscribe() {
  throw new Error('Function not implemented.');
}

