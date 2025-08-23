import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .then(() => console.log('App inicializado com sucesso!'))
  .catch(err => console.log(err));
