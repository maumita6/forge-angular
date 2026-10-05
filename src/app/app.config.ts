import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Landing } from './Features/landing/landing';
import { ChatContainer } from './Features/chat/chatContainer/chat';
import { routes } from './app.routes';

/*const routes: Routes = [
  { path: '', component: Landing },
  { path: 'chat/:id', component: ChatContainer }
];*/

export const appConfig: ApplicationConfig = {
  providers: [
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding())
  ]
};
