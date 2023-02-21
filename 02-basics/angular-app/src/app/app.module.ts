/*
! IMPORTANT what is app.module.ts?
! Angular uses components to build webpages and uses modules to bundle different pieces (different components of your app) into packages
! in the majority of the projects you will only use the app module (only in bigger projects you might want to be splitting your app into multiple modules)
! NB a module is a bundle of functionalities of our app and it basically gives Angular information about which features the app has and uses
! it is a normal class, but we transform it into something else by using the special @NgModule decorator
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  //! NB since we added a new component (the ServerComponent) and we need to let Angular know that this component exists, because IMPORTANT Angular will not scan all your files here
  //! in this way we tell Angular that part of this app module (i.e. the whole app since we only have this module) is the ServerComponent
  //! IMPORTANT register new components in the declarations array
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],

  // ! IMPORTANT bootstrap is responsible for telling Angular which kind of component should you be aware of when the whole application starts
  //! NB we will not add anu more component selectors to the index.html files --> this is just how it works
  bootstrap: [AppComponent],
})
export class AppModule {}
