import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { exampleInterceptor } from './interceptors/example.interceptor';
import { CustomErrorHandler } from './handlers/example-error-handler';
import { exampleHttpErrorInterceptor } from './interceptors/example-http-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([exampleInterceptor,exampleHttpErrorInterceptor])),
    provideRouter(routes), 
    provideClientHydration(),
    {provide :ErrorHandler , useClass:CustomErrorHandler},
    
  ]
};
