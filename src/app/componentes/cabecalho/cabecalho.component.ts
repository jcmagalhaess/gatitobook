import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent {
  user$ = this._usuarioService.retornaUsuario();

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {}

  logout() {
    this._usuarioService.logout();
    this._router.navigateByUrl('');
  }
}
