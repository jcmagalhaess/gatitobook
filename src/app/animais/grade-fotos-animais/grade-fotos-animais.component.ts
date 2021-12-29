import { Animais } from './../animais';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.scss']
})
export class GradeFotosAnimaisComponent implements OnInit {

  @Input() animais !: Animais

  constructor() { }

  ngOnInit(): void {
  }

}
