import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDialogModule } from '@angular/material/dialog';

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MarkerService } from './services/marker.service';
import { ServiceProviderModalComponent } from './components/service-provider-modal/service-provider-modal.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    HomeSearchComponent,
    ServiceProviderModalComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }