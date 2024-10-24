import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-repositores',
  standalone: true,
  imports: [ProductosComponent],
  templateUrl: './repositores.component.html',
  styleUrl: './repositores.component.css'
})

export class RepositoresComponent {
  repositores = new Map()
}

class Repositores {
  id: number
  usuario : string;
  #contrasenia : string;
  fechaCreacion : Date;
  estado: boolean;

  constructor(id:number, usuario:string, contrasenia:string,fechaCreacion:Date,estado:boolean){
    this.id=id;
    this.usuario=usuario;
    this.#contrasenia=contrasenia;
    this.fechaCreacion=fechaCreacion;
    this.estado=estado;
  }
}
