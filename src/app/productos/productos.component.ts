import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { Producto } from '../interfaces/Productos';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements Productos {
// crear funcionalidades (abm)
productosArray:Producto[] =[]
#id:number;
nombreProducto:string;
codigo:number;
marca:string;
cantidad:number;
precioVenta:number;
#precioCompra:number;

constructor (id:number,nombreProducto:string,codigo:number,marca:string,cantidad:number,precioVenta:number,precioCompra:number){
  this.#id =id;
  this.#precioCompra=precioCompra;
  this.precioVenta = precioVenta;
  this.cantidad= cantidad;
  this.marca = marca;
  this.codigo = codigo;
  this.nombreProducto = nombreProducto;
}


agregarProducto (productito:Producto){
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



