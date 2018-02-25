import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavRoutingModule } from './nav/nav-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ClinicaComponent } from './clinica/clinica.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { FooterComponent } from './home/footer.component';
import { OpinionComponent } from './opinion/opinion.component';
import { CarouselComponent } from './carousel/carousel-container.component';
 
import { OpinionService } from './opinion/opinion.service';
import { CarouselService } from './carousel/carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ClinicaComponent,
    EspecialidadesComponent,
    FooterComponent,
    OpinionComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NavRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [ OpinionService, CarouselService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
