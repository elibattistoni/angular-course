# What is Angular

Angular is a **JavaScript Framework** which allows you to create reactive **Single Page Applications (SPAs)**

# Angular vs. Angular 2 vs Latest Angular Version
Angular versioning:
1. AngularJS aka Angular 1 (you SHOULD NOT use this anymore)
2. Angular 2 (complete re-write, it is a totally different framework from Angular 1) --> 2016
3. Angular 4 (Angular 3 was skipped)
4. .....
5. Angular 10, 11, 12, ...

This course is about Angular 2+ i.e. the LATEST Angular version

NB the only big difference is between Angular 1 and Angular 2 --> there are all these versions because the Angular team releases a new version every 6 months, but this does not mean that every 6 months the framework changes entirely --> NB Angular is very backward compatible, i.e. it has not changed much since Angular 2 was released (it has, internally, but not regarding the code thatr you write) --> it is super stable and we only have those small, incremental, backwards.compatible changes

# First Angular App
To create an Angular app, you should use the official Angular command-line interface, CLI --> this is the recommended and best way of creating Angular projects, because Angular projects are a bit more elaborate regarding their build workflow. There are a couple of files that need to be converted before they can run in the browser and the CLI does all of that and it also heavily optimizes our code so that we ship a highly optimized code version to the browser once we finally deploy our app.

### Install Angular (latest version, globally)

https://angular.io/cli

>>> npm install -g @angular/cli@latest
or add sudo at the beginning

### Create Angula Project
navigate to the folder in which you want to create the project

>>> ng new angular-app --no-strict
- add --no-strict to start learning angular with a project without strict mode (we will see strict mode later)
- for now, do not add routing
- use css as style system

>>> cd angular-app/
>>> ng serve
- this command brings up a development server that will run your build for development-optimized app so that you can see it in the browser


### Bootstrap
Throughout the course, in order to have quick css styling, we will use Bootstrap. To install it:
>>> npm install --save bootstrap@3

Then we also need to make Angular aware of this styling package that we want to use. Go to the "angular.json" file (this configures teh CLI project) --> go to "styles":["src/styles.css"] and at the beginning of the array insert "node_modules/bootstrap/dist/css/bootstrap.min.css" then re-start the server with `ng serve`

node_modules/bootstrap/dist/css/bootstrap.min.css