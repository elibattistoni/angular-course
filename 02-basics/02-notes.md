# How Angular Apps get loaded and Started
--> http://localhost:4200/ is where our development server hosted / spun up by the CLI, will host our Angular App.
The content here can be changed by going to "app.component.html"

Bu how does the browser know that it should render the content of app.component.html?
This is not the file served by the server, instead the "index.html" file is hosted by the server --> index.html is the single page that is served (recall that Angular allows you to create SPAs --> index.html is the single page)

If you go to index.html file --> the body contains a weird thing:
<app-root>Loading...</app-root>
we do not see, in the browser, Loading... --> so index.html has changed
--> app-root is not a default html element, NB it is one of our components
--> we will create our own components, but when creating the project, the CLI created one for us --> the root component of our application, i.e. the component which will tie together our whole app in the end --> all the files in the app/ folder, which have app.component in their name, of course are related to this app component
--> look the app.component.ts --> you have the Component decorator and importantly it has a "selector" property to which is assigned a string i.e "app-root"
--> this is the info that Angular needs to replace the <app-root>Loading...</app-root> in index.html file with the template of this component (i.e. the component that has this selector) --> the template of this component is the content in app.component.ts
--> so all this is, is what happens at the startup

--> but how is Angular triggered? how is it kicked off to run over our body of the index.html file --> in the final index-html file (the one that you see in the browser inspecting the page) --> there a few scripts in the end, which are injected by the CLI automatically --> whenever the ng serve process re-builds our project (i.e. creates JS bundles), it automatically adds the right imports in the index.html file --> this scripts will contain our code --> these script files are executed (NB they are actually the first code to be executed --> which is the code that we write in our main.ts file --> NB this is the first code that gets executed)

in main.ts, with this line:
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
--> Bootstrap starts our Angular application by passing AppModule to a special method --> and AppModule refers to the app.module.ts file that is contained in the app/ folder

--> if you go to app.module.ts you will see a bootstrap property with an array as value, and in this there is our AppComponent, and this array should contain all components which should be known to Angular when it analizes our index.html file --> and here the circle closes because we reference our AppComponent

To recap:
--> Angular gets started (main.ts gets started) --> in this we bootstrap our angular application and we pass this module as argument (app.module.ts) --> in this app.module.ts we tell Angular that there is this AccComponent which you should know when you start yourself --> angula now analizes the App Component, reads the setup and the selector ("app-root") --> now Angular is able to handle app-route in index.html file --> so it knows that in <app-root></ap-root> should insert the app component

Keep in mind that Angular in the end is a JS framework, changing your DOM ('HTML') at runtime

# App Component and components in general
Components are a key feature in Angular: you build your whole app by composing it from a couple of components which you create on your own.

--> we start with the app component i.e. the root component, which holds our entire application basically in the end --> the app component is the component where we will nest / add our components to.

--> the core idea behind Angular --> to build components, where each component has its own template, its own HTML code, its own styling and its own business logic. --> it allows you to split up your complex application into reusabel parts


# Creating components
- NB all the other components that we create will not be added to the index.html file --> their selectors will not be added here --> their selectors will be added to the app.component.html file because this is the root component of our app, where we add the other parts
- NB store a new component in a subfolder of the app folder, because in an Angulr CLI project all your app related content will go into this app folder --> let's call it "server" because it will hold my server component --> BEST PRACTICE to have your folder name equal to the component name --> BEST PRACTICE each component should have its own folder
- NB a component is just a class, a Typescript class, so that angular is able to instantiate it to create objects based on the blueprint we set up NB IMPORTANT follow the naming conventions
- NB after creating the server.component.ts and server.component.html file, in order to understand how to use it, we have to dig deeper into  app.module.ts
- IMPORTANT cfr app.module.ts