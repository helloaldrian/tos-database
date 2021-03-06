import { NgModule }           from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserModule }      from '@angular/platform-browser';
import { FontAwesomeModule }  from "@fortawesome/angular-fontawesome";
import { NgbModule }          from "@ng-bootstrap/ng-bootstrap";
import { PapaParseModule }    from 'ngx-papaparse';

import { AppComponent }       from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { SharedModule }       from './shared/shared.module';
import { ShellModule }        from './shell/shell.module';

// Load FontAwesome's icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {faClock, faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faSearch, faTimes, faWeightHanging} from "@fortawesome/free-solid-svg-icons";

library.add(faClock, faGithub, faMoon, faSun, faSearch, faTimes, faWeightHanging);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    FontAwesomeModule,
    NgbModule.forRoot(),
    PapaParseModule,

    SharedModule,
    AppRoutingModule,
    ShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
