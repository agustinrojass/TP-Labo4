import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
// crear funcionalidades (abm)
productosArray:Productos[] =[]


agregarProducto (productito:Productos){
  this.productosArray.push(productito);
}
eliminarPoducto (id:number){
const eliminar = this.productosArray.findIndex(element=>element.id===id);
this.productosArray.splice(eliminar,1);
}
traerProducto (id:number){
  if (this.productosArray.findIndex(element=>element.id===id)){
    return this.productosArray.find(element=>element.id===id)
     }else{
      return -1;
     }

}

}



export class Productos {
  #id:number;
  nombreProducto:string;
  #codigo:number;
  marca:string;
  cantidad:number;
  precioVenta:number;
  #precioCompra:number;
  constructor (id:number,nombreProducto:string,codigo:number,marca:string,cantidad:number,precioVenta:number,precioCompra:number){
    this.#id=id;
    this.nombreProducto=nombreProducto;
    this.#codigo = codigo;
    this.marca = marca;
    this.cantidad = cantidad;
    this.precioVenta = precioVenta;
    this.#precioCompra = precioCompra;
  }

  ///Funciones del producto
get id (){
  return this.#id;
}
}