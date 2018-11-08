import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-struct',
  templateUrl: './page-struct.component.html',
  styleUrls: ['./page-struct.component.css']
})
export class PageStructComponent implements OnInit {
  showMenu=false;
  nombre_usuario;
  usuario;
  constructor() {
    this.usuario=JSON.parse(atob(sessionStorage.getItem('id')));
    this.nombre_usuario=this.usuario['name']
   }

  ngOnInit() {

    let img=document.getElementById('imagen_usuario');
    img.setAttribute('src',this.usuario['img']);
  }

}
