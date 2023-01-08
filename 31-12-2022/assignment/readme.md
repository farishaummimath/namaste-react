#  What is `NPM`?

 1. It is an online repository for the publishing of open-source Node.js projects. 
 2. It is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. 
 3. Node.js libraries and applications are published on npm. These applications can be searched for on https://www.npmjs.com/. Once you have a package you want to install, it can be installed with a single command-line command.

#  What is `Parcel/Webpack`? Why do we need it?

  1. Parcel and webpack are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application.
  2. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. 
  3. both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged!
  4. 
  [Parcel-vs-Webpack-info jpg](https://user-images.githubusercontent.com/14870340/211184083-5df64012-b48d-4d47-bcad-9a2cb668268f.jpeg)
  
  
  #  What is difference between `dependencies` vs `devDependencies`?
  
  | Dependency     | Dev Dependency      |
  | -------------  | -------------       |
  | Dependency is an object that contains the library, which your project requires for production environments and functioning effectively.           |devDependencies are those packages in the package.json file that you need only for project development purposes. Example- Babel, Webpack, etc. |
  |You require these packages to test and run your project on the localhost. |These types of dependencies are required during the web application development process but not while testing or executing it|
  |You can add dependencies to the package.json file by running the below command: **npm install <dependencies>** |For adding devDependencies to your project, run the below command: **npm install <dev_dependencies> --save-dev** |

 #  What is Tree Shaking?
 
    Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
    Module bundlers (e.g., webpack ) automatically remove dead code when bundling multiple JavaScript files into single files.
    This is important for preparing code that is production ready, for example with clean structures and minimal file size.
 
 #  What is Hot Module Replacement?
     
     1. Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.
        This can significantly   speed up development in a few ways: Retain application state which is lost during a full reload.
 
     2. It saves valuable development time by only updating what's changed.
  
  #  List down your favourite 5 superpowers of Parcel 
 
     1. Hot reloading
    As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser.
   By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience          by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change        small things in your code. CSS changes are automatically applied via HMR with no page reload necessary. 

     2. Dev server
         Parcel’s builtin dev server is automatically started when you run the default parcel command, which is a shortcut for parcel serve. By default, it     starts a server at http://localhost:1234. If port 1234 is already in use, then a fallback port will be used. After Parcel starts, the location             where the dev server is listening will be printed to the terminal.
 
     3. Lazy mode
        You can use the --lazy CLI flag to tell Parcel to defer building files until they are requested in the browser, which can significantly reduce development build times. The server starts quickly, and when you navigate to a page for the first time, Parcel builds only the files necessary for that page. When you navigate to another page, that page will be built on demand. If you navigate back to a page that was previously built, it loads instantly.
 `parcel 'pages/*.html' --lazy`

     4. Caching 
 
            Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have changed since the
        last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and           granularly invalidates the cache when something changes.
 
        For example, if you change a configuration file, all of the source files that rely on that configuration will be rebuilt.
 
     5. HTTPS

  #  What is `.gitignore`? What should we add and not add into it?
  #  What is the difference between `package.json` and `package-lock.json`
  #  Why should I not modify `package-lock.json`?
  #  What is `node_modules` ? Is it a good idea to push that on git?
  #  What is the `dist` folder?
  #  What is `browserlists`
