import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GuessWho';
  public personas: any = [
    {
      nombre: 'Miguel Cerquera',
      sexo: false,
      barba: false,
      ropaClara: false,
      colorPelo: "rubio",
      tipoPelo: "liso",
      foto: "http://localhost:4200/assets/miguel.png"
    },
    {
      nombre: 'Edson Suarez',
      sexo: false,
      barba: true,
      ropaClara: false,
      colorPelo: "negro",
      tipoPelo: "ondulado",
      foto: "http://localhost:4200/assets/edson.jpg"
    },
    {
      nombre: 'Natalia Ortiz',
      sexo: true,
      barba: false,
      ropaClara: true,
      colorPelo: "castaño",
      tipoPelo: "ondulado",
      foto: "http://localhost:4200/assets/natalia.jpg"
    },
    {
      nombre: 'Cristian Gomez',
      sexo: false,
      barba: true,
      ropaClara: false,
      colorPelo: "negro",
      tipoPelo: "crespo",
      foto: "http://localhost:4200/assets/cristian.jpg"
    },
    {
      nombre: 'Stiven Quiroga',
      sexo: false,
      barba: false,
      ropaClara: true,
      colorPelo: "castaño",
      tipoPelo: "liso",
      foto: "http://localhost:4200/assets/stiven.jpg"
    }
  ];

  constructor() {}
}
