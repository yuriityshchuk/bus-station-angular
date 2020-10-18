import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {RoutesComponent} from './components/routes/routes.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {HttpInterceptorJwtService} from './services/httpInterceptorJwt/http-interceptor-jwt.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TripComponent } from './components/trip/trip.component';
import { ResultComponent } from './components/result/result.component';
import { PageComponent } from './components/user/page/page.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { MainComponent } from './components/admin/main/main.component';
import {MatListModule} from '@angular/material/list';
import { BuyInfoComponent } from './components/buy-info/buy-info.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './components/register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoutesComponent,
    HeaderComponent,
    TripComponent,
    ResultComponent,
    PageComponent,
    SettingsComponent,
    MainComponent,
    BuyInfoComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorJwtService, multi: true},
    MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
