import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ApiLogoComponent } from './components/api-logo/api-logo.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interProvider } from './service/interceptor-service';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EditSkillComponent } from './components/hys/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill/new-skill.component';
import { EditEstudioComponent } from './components/estudio/edit-estudio/edit-estudio.component';
import { NewEducacoinComponent } from './components/estudio/new-educacoin/new-educacoin.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormGroup } from '@angular/forms';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApiLogoComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EstudioComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditExperienciaComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditEstudioComponent,
    NewEducacoinComponent,
    SignUpComponent,
    EditAcercaDeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [
    interProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
