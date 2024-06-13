import { Component} from '@angular/core';


@Component({
    selector: 'app-count',
    template: `
    
    <h1>{{title}}</h1>

    <h3> La base es: <strong>{{base}}</strong> </h3>

    <button (click)="acumular(base)"> + {{base}}</button>

    <span>{{numero}}</span>
    
    <button (click)="acumular(-base)"> - {{base}}</button>
` 
})

export class CountComponent{
  public title:String = 'Contador App';
  numero:number = 10;
  base:number = 100;

  acumular(valor:number){
    this.numero += valor;
  }

}