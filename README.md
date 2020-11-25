# MyApp11

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

## Development push notification app

Run following steps:
following:
    
    $ npm install web-push -g
    $ npm install
    $ web-push generate-vapid-keys --json
    
Adding a service worker to your project:

    $ ng add @angular/pwa --project *project-name*
    $ ng build --prod
    $ npm install -g http-server
    $ http-server -p 8080 -c-1 dist/<project-name>
    

## Running pwa push notification

Open PWA push notification app, click here [localhost:8080](http://localhost:8080/).

