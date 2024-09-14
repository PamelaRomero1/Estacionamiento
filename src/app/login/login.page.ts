import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
    
    value = 'Clear me';
    usuario: string = ''; 
    clave: string = ''; 
    errors: string[] = [];
  
  
  public nombreNombre: string = ' ';

  constructor(private router: Router) { 
    addIcons({ logoIonic });
  }
  ngOnInit() {}

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;  
  }

  validadorDatos() {
    this.errors = [];
    console.log(this.usuario.trim())
    console.log("hola")
    
    if (this.usuario.trim() === '') {
      console.log("pae aqui")
      this.errors.push('Usuario es requerido');
    }
    if (this.clave.trim() === '') {
      console.log("y aqui")
      this.errors.push('Clave es requerida');
    }

  
  if (this.errors.length === 0) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        user: this.usuario, 
      },
    };
    this.router.navigate(['home'], navigationExtras); 
  }
}
  }

  



