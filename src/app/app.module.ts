import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { FlistsComponent } from './flists/flists.component';
import { MiniTitleComponent } from './views/mini-title/mini-title.component';
import { FlistSemiWidthComponent } from './views/flist-semi-width/flist-semi-width.component';
import { FlistFullWidthComponent } from './views/flist-full-width/flist-full-width.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { ThumbComponent } from './views/thumb/thumb.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TitlePageComponent } from './title-page/title-page.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    SuggestionsComponent,
    FlistsComponent,
    MiniTitleComponent,
    FlistSemiWidthComponent,
    FlistFullWidthComponent,
    SafePipe,
    ThumbComponent,
    TitlePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
