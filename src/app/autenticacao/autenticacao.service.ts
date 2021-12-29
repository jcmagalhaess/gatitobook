import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private _httpClient: HttpClient,
    private _usuarioService: UsuarioService
  ) {}

  autenticar(user: string, password: string): Observable<HttpResponse<any>> {
    return this._httpClient
      .post(
        `${API}/user/login/`,
        {
          userName: user,
          password: password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this._usuarioService.salvaToken(authToken);
        })
      );
  }
}
