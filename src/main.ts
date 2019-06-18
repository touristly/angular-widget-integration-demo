import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { defineCustomElements } from 'activity-search-widget/dist/loader';

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch(err => console.log(err));;

defineCustomElements(window);