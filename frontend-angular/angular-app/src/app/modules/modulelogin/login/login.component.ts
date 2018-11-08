import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombre_usuario;
  public imagen_usuario="https://image.flaticon.com/icons/png/512/50/50050.png";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  ChangeImage(item){
    var tmppath = URL.createObjectURL(item.target.files[0]);
    debugger;
    let img=document.getElementById('image_user');
    this.imagen_usuario=tmppath;
    img.setAttribute('src',tmppath);
  }
  accesApp(){
    if(this.nombre_usuario){
      sessionStorage.setItem('id',btoa('{"name":"'+this.nombre_usuario+'","img":"'+this.imagen_usuario+'"}'));
      this.router.navigate(['table']);
    }else{
      alert('Error');
    }
  }


}
