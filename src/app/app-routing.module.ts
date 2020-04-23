
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';




const routes: Routes = [
  { path:'**', component:NopagefoundComponent},
]
export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: false } ); 