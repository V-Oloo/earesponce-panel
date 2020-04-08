import { LoginComponent } from './components/layouts/login/login.component';
import { RegisterComponent } from './components/layouts/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEighteenComponent } from './components/pages/home-eighteen/home-eighteen.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HomeResolver } from './components/pages/home-eighteen/home.resolver';

const routes: Routes = [
    {path: '', resolve: {stats: HomeResolver},component: HomeEighteenComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
