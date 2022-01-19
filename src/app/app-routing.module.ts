import { CalendarioComponent } from './component/calendario/calendario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicativosComponent } from './component/aplicativos/aplicativos.component';
import { BienestarComponent } from './component/bienestar/bienestar.component';
import { ComunicadosComponent } from './component/comunicados/comunicados.component';
import { DirectorioComponent } from './component/directorio/directorio.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { LoginComponent } from './component/login/login.component';
import { RedesSocialesComponent } from './component/redes-sociales/redes-sociales.component';
import { RegistroComponent } from './component/registro/registro.component';
import { SgsstComponent } from './component/sgsst/sgsst.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent },
  {path: 'registro',component: RegistroComponent},
  {path: 'directorio',component: DirectorioComponent},
  {path: 'aplicativos',component: AplicativosComponent},
  {path: 'sgsst',component: SgsstComponent},
  {path: 'bienestar',component: BienestarComponent},
  {path: 'comunicados',component: ComunicadosComponent},
  {path: 'comunicados',component: RedesSocialesComponent},
  {path: 'calendario',component: CalendarioComponent},
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
