import { Component } from '@angular/core';

//! NB you should add the special decorator @Component in order to tell Angular that this is not just a regular TS class, but instead something special, a component
//! NB decorators are a TS feature which allow you to enhance elements that you use in the code (it is not restricted to classes)
//! NB you need to pass a JS object to this @Component decorator to configure it, because without configuration it is not that valuable to Angular
//! in here we can setup some important information which will be stored as metadata for this class in the background which will tell Angular what to do with this class
//! one important piece of info is the selector, i.e. the HTML tag by which you will be able to use this component later in your other component templates
//! the selector is a string and you should make sure that it is a unique selector, and you should not override a default HTML element
//! BEST PRACTICE to prefix it with app- and then a fitting name
//! the other important piece of information is the template and it should be referenced to an external file that you create --> server.component.html
//! this will hold the template, the HTML code of my component --> with templateUrl you point to the server.component.html file --> NB we need a relative path for this

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {}
