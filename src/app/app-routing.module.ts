import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { FlistsComponent } from './flists/flists.component';
import { HomeComponent } from './home/home.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { TitlePageComponent } from './title-page/title-page.component';

const routes: Routes = [
  {path:'suggestions', component:SuggestionsComponent},
  {path:'flicklists', component:FlistsComponent},
  {path:'browse', component:BrowseComponent},
  {path:'title/:id', component:TitlePageComponent},
  {path:'', component: HomeComponent},
  {path:'**', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
