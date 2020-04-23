import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { PremiumComponent } from './auth/premium/premium.component';
import { HelpComponent } from './auth/help/help.component';
import { ArtistComponent } from './main/artist/artist.component';
import { NewReleasesComponent } from './main/new-releases/new-releases.component';
import { SearchArtistsComponent } from './main/search-artists/search-artists.component';
import { PrincipalComponent } from './main/principal.component';
import { IndexComponent } from './auth/index/index.component';

const pagesroutes: Routes = [
    
    { path:'',
      component: AuthComponent,
      children:[
        {path:'', redirectTo:'/index', pathMatch:'full' },
        {path:'index', component:IndexComponent},
        {path:'login', component:LoginComponent},
        {path:'premium', component:PremiumComponent },   
        {path:'help', component:HelpComponent },
      ]
     },
     { path:'principal',
      component: PrincipalComponent,
      children:[
      
        {path:'', redirectTo:'/new-releases', pathMatch:'full' },
        {path:'artist', component:ArtistComponent },
        {path:'new-releases', component:NewReleasesComponent},
        {path:'search-artist', component:SearchArtistsComponent},
      ]
     },
    ];
  
    export const PAGES_ROUTES = RouterModule.forChild( pagesroutes );