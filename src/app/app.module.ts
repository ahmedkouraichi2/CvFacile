import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoComponent } from './compo/compo.component';
import { ConseilComponent } from './conseil/conseil.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListeCvComponent } from './liste-cv/liste-cv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToutCVComponent } from './tout-cv/tout-cv.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { AutreComponent } from './autre/autre.component';
import { CvTotalComponent } from './cv-total/cv-total.component';
import { CvTopComponent } from './cv-top/cv-top.component';
import { ImagesComponent } from './images/images.component';
import { VehiculeModule } from './vehicule/vehicule.module';
import { VoirTousComponent } from './voir-tous/voir-tous.component';
import { VoirTous2Component } from './voir-tous2/voir-tous2.component';
import { NavlisteCvComponent } from './navliste-cv/navliste-cv.component';
import { Home2Component } from './home2/home2.component';
import { CvTop2Component } from './cv-top2/cv-top2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    CompoComponent,
    ConseilComponent,
    FooterComponent,
    HomeComponent,
    ListeCvComponent,
    NavbarComponent,
    ToutCVComponent,
    LoginComponent,
    QuestionComponent,
    AutreComponent,
    CvTotalComponent,
    CvTopComponent,
    ImagesComponent,
    VoirTousComponent,
    VoirTous2Component,
    NavlisteCvComponent,
    Home2Component,
    CvTop2Component
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    VehiculeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
