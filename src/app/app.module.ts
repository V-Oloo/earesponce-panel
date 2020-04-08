import { ContactComponent } from './components/layouts/contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { WhoWeAreComponent } from './components/layouts/who-we-are/who-we-are.component';
import { HomeEighteenComponent } from './components/pages/home-eighteen/home-eighteen.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RegisterComponent } from './components/layouts/register/register.component';
import { LoginComponent } from './components/layouts/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { Globals } from './global';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    WhoWeAreComponent,
    HomeEighteenComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [Globals, DatePipe],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
