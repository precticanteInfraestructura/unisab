import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FullCalendarModule} from 'primeng/fullcalendar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { DirectorioComponent } from './component/directorio/directorio.component';
import { SgsstComponent } from './component/sgsst/sgsst.component';
import { BienestarComponent } from './component/bienestar/bienestar.component';
import { ComunicadosComponent } from './component/comunicados/comunicados.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { AplicativosComponent } from './component/aplicativos/aplicativos.component';
import { CalendarioComponent } from './component/calendario/calendario.component';
import { FooterComponent } from './component/footer/footer.component';
import { RedesSocialesComponent } from './component/redes-sociales/redes-sociales.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    DirectorioComponent,
    SgsstComponent,
    BienestarComponent,
    ComunicadosComponent,
    NavbarComponent,
    InicioComponent,
    AplicativosComponent,
    CalendarioComponent,
    FooterComponent,
    RedesSocialesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
