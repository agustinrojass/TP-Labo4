import { Component } from '@angular/core';
import { RegistrarseComponent } from "../registrarse/registrarse.component";


@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [RegistrarseComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
