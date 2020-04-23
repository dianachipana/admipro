import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PAGES_ROUTES } from '../pages/pages-routing';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        NopagefoundComponent,
        HeaderComponent,
      
       
        
    ],
    imports:[
        PAGES_ROUTES,
        CommonModule
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
       
      ],
})
export class SharedModule{}
