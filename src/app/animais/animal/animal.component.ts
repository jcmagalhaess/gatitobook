import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  private _urlOriginal = ''

  @Input() descricao = ''
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this._urlOriginal = url
    } else {
      this._urlOriginal = `${API}/imgs/${url}`
    }
  }

  get url(): string {
    return this._urlOriginal
  }

  constructor() {  }

  ngOnInit(): void {
  }

}
