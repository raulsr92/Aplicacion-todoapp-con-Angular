import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todoapp';
  welcome = "Hola!";
  tasks = [
    "Instalar el Angular CLI",
    "Crear proyecto",
    "Crear componentes"
  ]
}
