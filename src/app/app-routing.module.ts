import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEighteenComponent } from './components/pages/home-eighteen/home-eighteen.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HomeResolver } from './components/pages/home-eighteen/home.resolver';
import { SuccessComponent } from './components/pages/success/success.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';

const routes: Routes = [
    {path: '', resolve: {stats: HomeResolver},component: HomeEighteenComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'success', component: SuccessComponent},
    {path: 'terms-and-contitions', component: TermsComponent},
    {path: 'privacy-policy', component: PrivacyComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
