import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { WithYtDirective } from './with-yt.directive';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    WithYtDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
