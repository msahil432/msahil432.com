import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

window.document.addEventListener('DOMContentLoaded', () => {
  function bootstrap() {
     platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
    if ('serviceWorker' in navigator && environment.production) {
      navigator.serviceWorker.register('ngsw-worker.js');
    }
  }).catch(err => console.log(err));
   };


 if (window.document.readyState === 'complete') {
   bootstrap();
 } else {
   window.document.addEventListener('DOMContentLoaded', bootstrap);
 }
 
});
