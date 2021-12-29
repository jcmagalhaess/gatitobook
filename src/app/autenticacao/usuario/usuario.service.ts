import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private _tokenService: TokenService) {
    if (this._tokenService.possuiToken()) {
      this._decodificarJWT();
    }
  }

  private _decodificarJWT() {
    const token = this._tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;

    this._usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this._usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this._tokenService.salvaToken(token);
    this._decodificarJWT();
  }

  logout() {
    this._tokenService.excluirToken();
    this._usuarioSubject.next({});
  }

  estaLogado() {
    return this._tokenService.possuiToken()
  }
}
