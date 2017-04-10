import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {getTranslationProviders} from './app/i18n-provider';

if (environment.production) {
    enableProdMode();
}

getTranslationProviders().then(providers => {
    platformBrowserDynamic(<Array<any>>providers).bootstrapModule(AppModule);
});

//platformBrowserDynamic().bootstrapModule(AppModule);
