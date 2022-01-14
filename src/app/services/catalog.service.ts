import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getListAllProducts(): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/catalog/get/list/all/products/');
  }

  getAllProductsToCategory(Id: string): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/catalog/list/product/category/' + Id + '/');
  }

  getListAllCategory(): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/catalog/get/list/all/category/');
  }
}
