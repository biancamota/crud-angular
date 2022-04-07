import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]; 
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    })
  }

  deleteProduct(event: boolean, element: Product): void {
    if(event) {
      this.productService.delete(element.id).subscribe(() => {
        this.productService.showMessage('Cadastro excluído com sucesso');
        location.reload();
      });
    }
  }

  public handleDismiss(dismissMethod: any): void {
  }

}
