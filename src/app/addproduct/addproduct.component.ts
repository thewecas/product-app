import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { addProduct, editProduct, getProduct, products } from "../products";
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  productId: number = NaN;
  formElement: any;
  title: string = '';
  // callToAction: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    this.productId = Number(routeParam.get('productId'));
    if (this.productId) {
      const product = getProduct(this.productId);
      this.formElement = this.newForm(product.name, product.description, product.price);
      this.title = "Edit Product";
      // this.callToAction = this.callToEditProduct();
    }
    else {
      this.formElement = this.newForm("", "", NaN);
      this.title = "New Product";
      // this.callToAction = this.callToAddProduct();
    }
  }


  newForm = (name: String, desc: String, price: number) => {
    const form = new FormGroup({
      name: new FormControl(name),
      desc: new FormControl(desc),
      price: new FormControl(price),
    });
    return form;
  };

  callToAddProduct = () => {
    console.log(this.formElement.value);
    let productId = Math.max(...products.map((obj: { id: any; }) => obj.id)) + 1;
    console.log(productId);
    productId = (productId).toString() == "-Infinity" ? 1 : productId;
    addProduct({
      "id": productId,
      "name": this.formElement.value.name,
      "description": this.formElement.value.desc,
      "price": this.formElement.value.price

    });
    this.router.navigate(['./']);
  };

  callToEditProduct = () => {
    editProduct(this.productId, {
      "name": this.formElement.value.name,
      "description": this.formElement.value.desc,
      "price": this.formElement.value.price
    });
  };



}

function subscribe() {
  throw new Error('Function not implemented.');
}

function callToAddProduct() {
  throw new Error('Function not implemented.');
}

