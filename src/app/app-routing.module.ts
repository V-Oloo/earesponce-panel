import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEighteenComponent } from './components/pages/home-eighteen/home-eighteen.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HomeResolver } from './components/pages/home-eighteen/home.resolver';

const routes: Routes = [
    {path: '', resolve: {stats: HomeResolver},component: HomeEighteenComponent},
    {path: 'error', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
