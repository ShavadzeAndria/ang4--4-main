import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
     {path: "", redirectTo:"home", pathMatch:'full'},
     {path: "home", component: HomeComponent},
     {path: "main", component:MainComponent},
     {path: "about", component:AboutComponent},
     {path: "services", component:ServicesComponent},
     {path: "**", component: ErrorComponent}

];


// wild card      st*  stfdffd stdsd step