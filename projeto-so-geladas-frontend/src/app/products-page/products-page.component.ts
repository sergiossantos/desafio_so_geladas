import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ProductsPageService } from './products-page.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})


export class ProductsPageComponent implements OnInit {
  content?: string;
  produtos: Array<any> = new Array();
 
  constructor(private produtosService: ProductsPageService){

  }

  ngOnInit(): void {
    this.listarProdutos();
   
  }

  listarProdutos(){
    this.produtosService.listarProdutos().subscribe( produtos => {
      this.produtos = produtos;

    }, err => { 
      console.log('erro ao listar produtos', err );
      
    })

  };
}
