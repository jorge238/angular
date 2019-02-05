import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {
  ver = true;
  titulo: any ={
    mensaje:"hola soy juanito",
    autor:"yo"
    };

    personajes:string[]=['spider','venom','iron man'];
  constructor() { }

  ngOnInit() {
  }

}
