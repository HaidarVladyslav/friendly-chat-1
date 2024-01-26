import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { connectStorageEmulator, getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => {
        const auth = getAuth();
        if(location.hostname === 'localhost') {
          connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
        }
        return auth;
      }),
      provideFirestore(() => {
        const firestore = getFirestore();
        if (location.hostname === 'localhost') {
          connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
        }
        return firestore;
      }),
      provideStorage(() => {
        const storage = getStorage();
        if (location.hostname === 'localhost') {
          connectStorageEmulator(storage, '127.0.0.1', 9199)
        }
        return storage;
      }),
      provideFunctions(() => {
        const functions = getFunctions();
        if(location.hostname === 'localhost') {
          connectFunctionsEmulator(functions, '127.0.0.1', 5001);
        }
        return functions;
      }),
      provideDatabase(() => getDatabase()),
      provideMessaging(() => {
        // navigator.serviceWorker.register('../web/firebase-messaging-sw.js');
        return getMessaging();
      }),
    ]),
  ]
};
