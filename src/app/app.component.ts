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
      gafas: false,
      descartado: false,
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
      gafas: false,
      descartado: false,
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
      gafas: true,
      descartado: false,
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
      gafas: false,
      descartado: false,
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
      gafas: false,
      descartado: false,
      foto: "http://localhost:4200/assets/stiven.jpg"
    }
  ];
  public personSelectUser: any;
  public personSelectMach: any;
  public hideSelect: Boolean;
  public preguntas: any = [
    {pregunta: "¿Es hombre?", id: "sexoH"},
    {pregunta: "¿Es mujer?", id: "sexoM"},
    {pregunta: "¿Tiene anteojos?", id: "gafas"},
    {pregunta: "¿Tiene pelo rubio?", id: "colorPeloR"},
    {pregunta: "¿Tiene pelo castaño?", id: "colorPeloC"},
    {pregunta: "¿Tiene pelo negro?", id: "colorPeloN"},
    {pregunta: "¿Tiene barba?", id: "barba"},
    {pregunta: "¿Tiene pelo crespo?", id: "tipoPeloC"},
    {pregunta: "¿Tiene pelo lizo?", id: "tipoPeloL"},
    {pregunta: "¿Tiene pelo ondulado?", id: "tipoPeloO"},
    {pregunta: "¿Tiene ropa clara?", id: "ropaClara"},
    {pregunta: "¿Tiene ropa oscura?", id: "ropaOscura"}
  ]

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

  selectPregunta(question: any){
    this.personSelectMach;
    console.log(question.id);
    console.log(this.personSelectUser);
    if(question.id == "sexoH"){
      this.personas.forEach((element: any) => {
        if (!element.sexo) element.descartado = true;
      });
    }
    let cont = 0;
    this.personas.forEach((e: any) => {
      if(e.descartado == false){
        cont++;
      }
    });
    if(cont <= 1 ){
      console.log("Juego terminado")      
    }
  }
}
