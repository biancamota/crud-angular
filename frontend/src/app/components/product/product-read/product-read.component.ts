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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);
    })
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Cadastro excluído com sucesso');
    });
  }

}
