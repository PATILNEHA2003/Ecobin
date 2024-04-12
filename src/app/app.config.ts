import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ecobintracer","appId":"1:909399063903:web:1fb920ce12cac132958aea","storageBucket":"ecobintracer.appspot.com","apiKey":"AIzaSyBz10WcnoO0KJVD4556STdwg1xawK8Jnng","authDomain":"ecobintracer.firebaseapp.com","messagingSenderId":"909399063903"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
