import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
    PreloadAllModules,
    provideRouter,
    withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import {
    BrowserModule,
    provideClientHydration,
    withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import {
    BrowserAnimationsModule,
    provideAnimations,
} from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom([BrowserModule, BrowserAnimationsModule]),
        provideRouter(routes, withPreloading(PreloadAllModules)),
        provideClientHydration(
            withHttpTransferCacheOptions({
                includePostRequests: true,
              }),
        ),
        provideAnimations(),
        provideHttpClient(withFetch()),
    ],
};
