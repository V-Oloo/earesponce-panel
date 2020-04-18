import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { SuccessComponent } from './components/pages/success/success.component';
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
import { FaqComponent } from './components/layouts/faq/faq.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule} from '@angular/common/http';
import { Globals } from './global';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    NavbarComponent,
    SuccessComponent,
    ContactComponent,
    WhoWeAreComponent,
    HomeEighteenComponent,
    ErrorComponent,
    FaqComponent,
    TermsComponent,
    PrivacyComponent
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
