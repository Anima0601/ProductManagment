import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productlist.component.html',
})
export class ProductlistComponent implements OnInit {
  products: any[] = [];

  constructor(private service: ProductserviceService) {}

  ngOnInit(): void {
    this.service.loadProducts();
    this.products = this.service.getProducts();
  }

  deleteProduct(pid: number) {
    this.service.deleteProduct(pid);
    this.products = this.service.getProducts();
  }
}
