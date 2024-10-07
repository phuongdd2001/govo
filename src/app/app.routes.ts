import { Routes } from '@angular/router';
import { PageErrorComponent } from './pages/404/privacy-policy.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '', title: 'Govo Tech' },
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'Govo Tech',
    },
    {
        path: 'terms-conditions',
        loadComponent: () =>
            import('./pages/terms-of-use/terms-of-use.component').then(
                (m) => m.TermsOfUseComponent
            ),
        title: 'Terms Conditions',
    },
    {
        path: 'privacy-policy',
        loadComponent: () =>
            import('./pages/privacy-policy/privacy-policy.component').then(
                (m) => m.PrivacyPolicyComponent
            ),
        title: 'Privacy Policy',
    },
    {
        path: '**',
        component: PageErrorComponent,
    },
];
