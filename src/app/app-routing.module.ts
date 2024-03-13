import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EditSkillComponent } from './components/hys/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill/new-skill.component';
import { NewEducacoinComponent } from './components/estudio/new-educacoin/new-educacoin.component';
import { EditEstudioComponent } from './components/estudio/edit-estudio/edit-estudio.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'nuevaexp',component:NuevaExperienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'nuevaedu', component: NewEducacoinComponent},
  { path: 'editedu/:id', component: EditEstudioComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'editaracercade/:id',component:EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
