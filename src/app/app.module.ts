import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { DaniAnimationsComponent } from './components/open-close/dani-animations/dani-animations.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FatButtonDirective } from './directives/fat-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    DaniAnimationsComponent,
    SidenavComponent,
    FatButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
