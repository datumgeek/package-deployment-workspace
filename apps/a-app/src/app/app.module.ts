import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MylibAOneComponent } from '@mylib/a-one';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MylibAOneComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
