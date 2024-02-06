import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Curso } from '../../../cursos/models';
import { Subject } from 'rxjs';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-abm-inscripciones',
  templateUrl: './abm-inscripciones.component.html',
  styleUrls: ['./abm-inscripciones.component.scss']
})
export class AbmInscripcionesComponent implements OnDestroy {

  cursoControl = new FormControl('', [Validators.required]);
  alumnoControl = new FormControl('', [Validators.required]);

  curso: Curso | undefined;
  private destroyed$ = new Subject();

  inscripcionForm = new FormGroup({
    curso: this.cursoControl,
    alumno: this.alumnoControl,
  });
  dialogRef: any;


  guardar(): void {
    if (this.inscripcionForm.valid) {
      this.dialogRef.close(this.inscripcionForm.value)
    } else {
      this.inscripcionForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }  

}