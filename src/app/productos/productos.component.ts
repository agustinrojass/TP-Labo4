import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
// crear funcionalidades (abm)
productos:Productos[] =[]
 
}


export class Productos {
  id:number;
  nombreProducto:string;
  #codigo:number;
  marca:string;
  cantidad:number;
  precioVenta:number;
  #precioCompra:number;
  constructor (id:number,nombreProducto:string,codigo:number,marca:string,cantidad:number,precioVenta:number,precioCompra:number){
    this.id=id;
    this.nombreProducto=nombreProducto;
    this.#codigo = codigo;
    this.marca = marca;
    this.cantidad = cantidad;
    this.precioVenta = precioVenta;
    this.#precioCompra = precioCompra;
  }

  ///Funciones del producto
}