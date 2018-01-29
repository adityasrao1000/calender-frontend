import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DateDetailsComponent } from './date-details/details.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'details/:id', component: DateDetailsComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
