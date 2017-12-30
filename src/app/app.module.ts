import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavRoutingModule } from './nav-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { ClinicaComponent } from './clinica.component';
import { EspecialidadesComponent } from './especialidades.component';
import { FooterComponent } from './footer.component';
import { OpinionComponent } from './opinion.component';
import { CarouselComponent } from './carousel/carousel-container.component';
import { CarouselImageComponent } from './carousel/carousel-image.component';
 
import { OpinionService } from './opinion.service';
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
    CarouselComponent,
    CarouselImageComponent
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
