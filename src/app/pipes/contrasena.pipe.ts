import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(contrasena: string, activar:boolean): string {
    
    let nombres = contrasena.split("");
   
    if(activar)
    {
      for(let i in nombres){
        nombres[i]="*";
      }
      return nombres.join(" ") ;
    }else{
      return contrasena;
    }
  }

}
