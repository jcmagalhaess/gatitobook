import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = ''
  password = ''

  constructor(private _authService: AutenticacaoService, private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this._authService.autenticar(this.user, this.password).subscribe(()=>{
      this._router.navigateByUrl('animais')
    },
      (error) => {
        alert('Usuário ou senha inválido')
        console.log(error)
      }
    )
  }

}
