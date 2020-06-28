import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { locData } from '../destination-list';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  locData = locData;
  product;
  name: string;
  blog: string;
  image: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }


  ngOnInit() {
          this.route.paramMap.subscribe(params => {
    this.product = locData[+params.get('productId')];
  });
  }

 }


