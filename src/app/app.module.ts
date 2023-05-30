import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from'@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
