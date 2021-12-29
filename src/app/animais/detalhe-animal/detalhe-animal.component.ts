import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.scss'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private _animaisService: AnimaisService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this._activatedRoute.snapshot.params.animalId;
    this.animal$ = this._animaisService.buscaPorId(this.animalId);
  }

  curtir() {
    this._animaisService.curtir(this.animalId).subscribe((curtida) => {
      if(curtida) {
        this.animal$ = this._animaisService.buscaPorId(this.animalId)
      }
    });
  }

  excluir() {
    this._animaisService.excluiAnimal(this.animalId).subscribe(
      () => {
        this._router.navigateByUrl('animais');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
