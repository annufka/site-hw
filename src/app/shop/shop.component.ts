import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any;
  categories: any;

  constructor(private apiCatalog: CatalogService) { }

  ngOnInit(): void {
    this.getListAllProducts();
    this.getListAllCategory();
  }

  getListAllProducts(): void {
    this.apiCatalog.getListAllProducts().subscribe(
      data => {
        console.log(data);
        this.products = data.result;
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllProductsToCategory(Id: string) {
    this.apiCatalog.getAllProductsToCategory(Id).subscribe(
      data => {
        console.log(data);
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getListAllCategory(): void {
    this.apiCatalog.getListAllCategory().subscribe(
      data => {
        console.log(data);
        this.categories = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  setCategory(Id: string): void {
    console.log(Id);
    this.getAllProductsToCategory(Id);
  }

}
