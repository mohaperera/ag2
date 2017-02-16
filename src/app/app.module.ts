import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { headerComponent } from './header/app.headercomponent';
import { navComponent } from './nav/app.navcomponent';
import { contentareaComponent } from './contentarea/app.contentareacomponent';
import { footComponent } from './foot/app.footcomponent';
import { aboutComponent } from './about/app.aboutcomponent';
import { apiData } from './app.apidata.service';
 const routes: Routes = [
  { path: '',component: contentareaComponent },
  { path: 'about', component: aboutComponent },
   { path: 'Contact', component: contentareaComponent }
];

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(routes),HttpModule
   

   ],
  declarations: [ AppComponent,headerComponent,navComponent,contentareaComponent,footComponent,aboutComponent ],
  bootstrap:    [ AppComponent ],  
  providers : [apiData]
})
export class AppModule { }
