
## What is Emmet?

    Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow.
    

## Difference between a Library and Framework?

    * Both frameworks and libraries are code written by someone else that is used to help solve common problems.
    * The technical difference between a framework and a library lies in the inversion of control.
    * When an application code uses a library, the developer writing the code is in charge of the application flow. 
      This means the developer decides when to call the library. 
    * However, when we use a framework, the framework decides when to call the library. 
      This shift in control of calling the library from the application  code to the framework is an inversion of control.


## What is CDN? Why do we use it?
  
    CDN stands for content delivery network which refers to a geographically distributed group of servers which work together 
    to provide fast delivery of Internet content.

## Why is React known as React?

    React was developed for applications that have constantly changing data. React is named React because of its ability to react to changes in data. When the data in a React component changes, React will automatically re-render the component so that it reflects the new data. This makes it easy to create performant user interfaces that always look up-to-date.


## What is crossorigin in script tag?

       * The crossorigin attribute, valid on the <audio>, <img>, <link>, <script>, and <video> elements, provides support for CORS, 
         defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for 
         the element's fetched data.
       * Depending on the element, the attribute can be a CORS settings attribute.
       * CORS refers to Cross-Origin Resource Sharing, 
       * It is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from 
         which a browser should permit loading resources
 
## What is diference between React and ReactDOM?
    
    * React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.
    * The react package holds the react source for components, state, props and all the code that is react.
    * The react-dom package as the name implies is the glue between React and the DOM.

## What is difference between react.development.js and react.production.js files via CDN?
        
        * The react.development.js versions  are only meant for development, and are not suitable for production. 
        * The react.production.js files are minified  and   optimized production versions of React .
        * react.development.js provides us with many helpful warnings and tools for easily detecting and fixing problems 
          in our application code and eliminating potential bugs. However, these extra codes increase bundle size and hence, a slower running app.
        * The production file minifies your code, optimises assets, and produces lighter weight source maps. 
        * Also, the warning messages and other features present in development mode for debugging will be suppressed.
        * As a result, the bundle size is drastically reduced and improves page load time. 
        * React recommends utilising the production mode while deploying the application.

## What is async and defer?

    Whenever web browser starts parsing the HTML and it pauses when the script tag is reached(external script files) .  Parsing of HTML is blocked and browser makes a request to fetch/download the respective script file. Once the script is fetched, it gets executed and then HTML parsing resumes again. At this point JavaScript files are blocking the rendering of HTML. To prevent this we can use async and defer attributes.
    
      * async - With async (asynchronous) attribute, the HTML parsing continues until the browser fetches the script file over the network so parsing and script fetching happens in parallel (as shown in the figure below). Once the scripts are available in the browser, HTML parsing is paused and scripts are executed. Once the execution is complete, HTML parsing continues.
        <script async src="file.js"></script>     
      * defer - With defer attribute, the script files are downloaded in parallel while the HTML parsing continues. But the execution is deferred until the HTML parsing is done. The downloaded scripts are executed only when the browser finishes its HTML parsing.
        <script defer src="file.js"></script>     

 
