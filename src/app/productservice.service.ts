import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  private products: any[] = [];
  private loaded = false;

  constructor(private http: HttpClient) {}

  loadProducts() {
    if (this.loaded) return;

    this.http.get<any[]>('assets/db.json').subscribe((data) => {
      this.products = data;
      this.loaded = true;
    });
  }

  getProducts() {
    return this.products;
  }

  deleteProduct(pid: number) {
    this.products = this.products.filter((p) => p.pid !== pid);
  }
}
