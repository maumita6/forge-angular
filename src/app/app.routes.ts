import { Routes } from '@angular/router';
import { Login } from './Features/auth/login/login';
import { Landing } from './Features/landing/landing';
import { MainLayout } from './Layouts/main-layout/main-layout';
import { ChatContainer } from './Features/chat/chatContainer/chat';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./Features/auth/login/login').then(m => m.Login)
    },
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./Features/landing/landing').then(m => m.Landing)
            },
            {
                path: 'chat/:id',
                loadComponent: () =>
                    import('./Features/chat/chatContainer/chat').then(m => m.ChatContainer)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
