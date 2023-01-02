import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from './components/input/input.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, InputComponent, IconButtonComponent, AccordionComponent, CardComponent, HeaderComponent],
  imports: [BrowserModule, NgbModule, NgxBootstrapIconsModule.pick(allIcons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
