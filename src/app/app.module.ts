// Core modules
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// App modules
import { AppDatabaseModule } from './app-database.module';
import { AppHttpClientModule } from './app-http-client.module';
import { ViewsModule } from './views/views.module';

// External modules

// Components
import { AppComponent } from './app.component';

// Others
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './helpers/jwt.interceptor';

// Locales
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';


// Register locale ES
registerLocaleData(localeEs, 'es');

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ViewsModule,
    AppDatabaseModule,
    AppHttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es' }
  ],
})
class AppModule { }


export {
  AppModule,
};
