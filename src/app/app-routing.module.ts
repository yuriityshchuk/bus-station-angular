import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RoutesComponent} from './components/routes/routes.component';
import {RouteGuardService} from './services/routeGuard/route-guard.service';
import {ResultComponent} from "./components/result/result.component";
import {PageComponent} from "./components/user/page/page.component";
import {SettingsComponent} from "./components/user/settings/settings.component";
import {MainComponent} from "./components/admin/main/main.component";
import {RoleGuardService} from "./services/roleGuard/role-guard.service";
import {RegisterComponent} from "./components/register/register.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'route', component: RoutesComponent, canActivate: [RouteGuardService]},
  {path: 'result', component: ResultComponent, canActivate: [RouteGuardService]},
  {path: 'user-page', component: PageComponent, canActivate: [RouteGuardService]},
  {path: 'user-settings', component: SettingsComponent, canActivate: [RouteGuardService]},
  {path: 'admin-page', component: MainComponent, canActivate: [RouteGuardService, RoleGuardService]},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


