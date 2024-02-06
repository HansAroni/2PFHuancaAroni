import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login/login.component';
import { AlumnoDetalleComponent } from './dashboard/pages/alumnos/pages/alumno-detalle/alumno-detalle.component';
import { InscripcionesComponent } from './dashboard/pages/inscripciones/inscripciones.component';
import { CursoDetalleComponent } from './dashboard/pages/cursos/pages/curso-detalle/curso-detalle.component';

const routes: Routes = [
  // Tablero
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'estudiantes',
        children: [
          {
            path: '',
            component: AlumnosComponent,
          },
          {
            path: ':id',
            component: AlumnoDetalleComponent
          }
        ]
      },
      {
        path: 'cursos',
        children: [
          {
            path: '',
            component: CursosComponent,
          },
          {
            path: ':id',
            component: CursoDetalleComponent,
          }
        ]
      },      
      {
        path: 'inscripciones',
        component: InscripcionesComponent,
      }
    ]
  },
  // Autentificacion
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
