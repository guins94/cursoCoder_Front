import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

import{ ProductService } from './../product.service'
import { Router } from '@angular/router'
import {Product} from './../product.mode'

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price', 'action']
  products: Product[]

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.read().subscribe((products)=>{
      this.products=products
      console.log(this.products)
    })
  }

}
