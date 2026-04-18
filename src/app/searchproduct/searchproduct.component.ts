import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-searchproduct',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchproduct.component.html',
})
export class SearchproductComponent {
  searchText: string = '';
  products: any[] = [];

  constructor(private service: ProductserviceService) {}

  ngOnInit() {
    this.service.loadProducts();
  }

  searchProducts() {
    const all = this.service.getProducts();

    this.products = all.filter((p) =>
      p.pname.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }
}
