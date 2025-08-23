import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration()
  ]
};
