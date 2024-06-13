import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
 heroes:string[] = ['Heroe1','Heroe2','Heroe3','Heroe4','Heroe5','Heroes6'];
 heroeBorrado:string = '';

 borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';
  
 }

}