import { Productos } from './../interfaces/Productos.interface';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { Productos } from '../interfaces/Productos.interface';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, Productos],
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



