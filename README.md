# angular-widget-integration-demo to run project

1. Install NodeJS and NPM.
2. Download or clone the project source code from https://github.com/touristly/angular-widget-integration-demo
3. Install all required npm packages by running `npm install` from the command line in the project root folder.
4. Start the application by running `npm start` from the command line in the project root folder.
5. Your browser should automatically open at http://localhost:8080 with the activity widget displayed.

# Angular widget integration integration

You can follow the instruction mentioned in the link https://stenciljs.com/docs/angular#calling-definecustomelements or refer below. 

Using a Stencil built web component collection within an Angular CLI project is a two-step process. We need to:

1. Include the CUSTOM_ELEMENTS_SCHEMA in the modules that use the components.
2. Call defineCustomElements(window) from main.ts (or some other appropriate place)

## Including the Custom Elements Schema

Including the CUSTOM_ELEMENTS_SCHEMA in the module allows the use of the web components in the HTML markup without the compiler producing errors. Here is an example of adding it to AppModule:

```
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

The CUSTOM_ELEMENTS_SCHEMA needs to be included in any module that uses custom elements.

## Calling defineCustomElements

A component collection built with Stencil includes a main function that is used to load the components in the collection. That function is called defineCustomElements() and it needs to be called once during the bootstrapping of your application. One convenient place to do this is in main.ts as such:

```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target confg
import { defineCustomElements } from 'test-components/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements(window);
```

## Accessing components

Component can be integrated witin any template or angular component using the component name like below

```
<activity-search-widget></activity-search-widget>
```