import { Component } from '@angular/core';

@Component({
  selector: 'app-repositores',
  standalone: true,
  imports: [],
  templateUrl: './repositores.component.html',
  styleUrl: './repositores.component.css'
})

export class RepositoresComponent {
    usuario : string;
    contrasenia : string;
    fechaCreacion : Date;
    estado: boolean;

    constructor(usuario:string,contrasenia:string,fechaCreacion:Date,estado:boolean){
      this.usuario=usuario;
      this.contrasenia=contrasenia;
      this.fechaCreacion=fechaCreacion;
      this.estado=estado;
    }
}
