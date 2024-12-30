import { Component } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { ProductService } from 'src/app/Services/ProductService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [];
 columns: TableColumn[] | any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   // doldur
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
