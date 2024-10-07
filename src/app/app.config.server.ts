import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
    BrowserModule,
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

const serverConfig: ApplicationConfig = {
  providers: [

    provideServerRendering()

  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
