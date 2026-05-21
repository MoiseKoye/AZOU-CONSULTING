import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ExpertiseComponent } from './features/expertise/expertise.component';
import { ServicesComponent } from './features/services/services.component';
import { SectorsComponent } from './features/sectors/sectors.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'expertise', component: ExpertiseComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'sectors', component: SectorsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];