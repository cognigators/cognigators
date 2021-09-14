import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { SpQueueModalComponent } from './components/sp-queue-modal/sp-queue-modal.component';
import {AboutComponent} from './about/about.component';
import {SettingsComponent} from './settings/settings.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {TermsComponent} from './terms/terms.component';
import { ServiceProviderModalComponent } from './components/service-provider-modal/service-provider-modal.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: HomeSearchComponent },
  { path: 'sp-queue', component:SpQueueModalComponent},
  { path: 'search', component: HomeSearchComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'settings' , component: SettingsComponent },
  { path: 'privacy' ,component: PrivacyComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'spmodal', component: ServiceProviderModalComponent},
  { path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
