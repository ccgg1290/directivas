import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'directivas registro usuario';
  mensaje='';
  registrado=false;
  nombre:String="";
  apellido:String="";
  entradas: any;
  cargo:String="";

  constructor(){

    this.entradas=[

        {titulo:"Python ada dia am spresente"},
        {titulo:"Java presente hac 20 años"}, 
        {titulo:"javascript cada dia mas funcional"},
        {titulo:"Kotil potencia apra tus apps"},
        {titulo:"donde quedo pascal"}
    ]


  

  }

  registrarUsuario(){

    this.registrado=true;
    this.mensaje="usuario registrado con exito"
}
}

