import { LoginComponent } from './auth/login/login.component';
import { PAGES_ROUTES } from './pages-routing';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PremiumComponent } from './auth/premium/premium.component';
import { HelpComponent } from './auth/help/help.component';
import { NewReleasesComponent } from './main/new-releases/new-releases.component';
import { ArtistComponent } from './main/artist/artist.component';
import { SearchArtistsComponent } from './main/search-artists/search-artists.component';
import { CardComponent } from '../components/card/card.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { PrincipalComponent } from './main/principal.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
    declarations:[
    AuthComponent,
    LoginComponent,
    PremiumComponent,
    HelpComponent,
    NewReleasesComponent,
    ArtistComponent,
    CardComponent,
    SearchArtistsComponent,
    NavbarComponent,
    PrincipalComponent
    
  
   
    ],
    exports:[
         
        
    ],
    imports:[
        PAGES_ROUTES,
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        

        
    ]
})
export class PagesModule{}