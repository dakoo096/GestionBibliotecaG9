import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Libro } from 'src/app/models/Libro';
import { LibrosService } from 'src/app/servicios/libro.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public Libros: Libro[] = [];

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }
  cargarLibros() {
    return this.librosService.cargarLibros().subscribe((data) => {
      this.Libros = data;
      console.log(data);
    });
  }

}
