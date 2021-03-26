import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { TemporizadorComponent } from "./temporizador/temporizador.component";
import { DisciplinasComponent } from "./disciplinas/disciplinas.component";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { TimerService } from './timer.service';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "temporizador", component: TemporizadorComponent },
      { path: "disciplinas", component: DisciplinasComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TemporizadorComponent,
    DisciplinasComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, DisciplinasService]
})
export class AppModule {}
