import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent{

     name:string = 'Ironman';
     age:number = 45;

    get nameCapitalizado():string{
        return this.name.toUpperCase();
    }

     obtenerNombre():string {
        return `${this.name} - ${this.age}`;
    }

     cambiarNombre():void{
        this.name = 'Spiderman';
        
    }

    cambiarEdad():void{
        this.age = 30;
    }


}