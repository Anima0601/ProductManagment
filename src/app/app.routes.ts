import { Routes } from '@angular/router';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';

export const routes: Routes = [
  { path: 'search', component: SearchproductComponent },
  { path: 'list', component: ProductlistComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];
