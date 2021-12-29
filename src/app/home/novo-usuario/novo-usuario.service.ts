import { environment } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private _httpClient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this._httpClient.post(`${API}/user/signup/`, novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this._httpClient.get(`${API}/user/exists/${nomeUsuario}`)
  }
}
