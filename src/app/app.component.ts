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
      select: false,
      colorPelo: "rubio",
      tipoPelo: "liso",
      foto: "http://localhost:4200/assets/miguel.png"
    },
    {
      nombre: 'Edson Suarez',
      sexo: false,
      barba: true,
      ropaClara: false,
      select: false,
      colorPelo: "negro",
      tipoPelo: "ondulado",
      foto: "http://localhost:4200/assets/edson.jpg"
    },
    {
      nombre: 'Natalia Ortiz',
      sexo: true,
      barba: false,
      ropaClara: true,
      select: false,
      colorPelo: "castaño",
      tipoPelo: "ondulado",
      foto: "http://localhost:4200/assets/natalia.jpg"
    },
    {
      nombre: 'Cristian Gomez',
      sexo: false,
      barba: true,
      ropaClara: false,
      select: false,
      colorPelo: "negro",
      tipoPelo: "crespo",
      foto: "http://localhost:4200/assets/cristian.jpg"
    },
    {
      nombre: 'Stiven Quiroga',
      sexo: false,
      barba: false,
      ropaClara: true,
      select: false,
      colorPelo: "castaño",
      tipoPelo: "liso",
      foto: "http://localhost:4200/assets/stiven.jpg"
    }
  ];
  public personSelectUser: any;
  public personSelectMach: any;
  public hideSelect: Boolean;
  public preguntas: any = [
    "¿Es hombre?",
    "¿Es mujer?",
    "¿Tiene anteojos?",
    "¿Tiene pelo rubio?",
    "¿Tiene pelo castaño?",
    "¿Tiene pelo negro?",
    "¿Tiene barba?",
    "¿Tiene pelo crespo?",
    "¿Tiene pelo lizo?",
    "¿Tiene pelo ondulado?",
    "¿Tiene ropa clara?",
    "¿Tiene ropa oscura?"
  ];

  constructor() {
    this.hideSelect = true;
  }

  select(item: any) {
    this.personas.forEach( (data: any) => {
      data.select = false;
    });
    item.select = true;
    this.personSelectUser = item;
    this.hideSelect = false;
    const number = this.getRandomArbitrary(0, 4);
    this.personSelectMach = this.personas[number];
    const numberQuestion = this.getRandomArbitrary(0, 11);
    const preguntaMach = this.preguntas[numberQuestion];
    console.log(preguntaMach);
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
