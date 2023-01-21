## what is JSX?

 JSX is a Markup language used in order to create React elements. 
 The markup can be used to represent a standalone single component or a complex component.
 The syntax for writing JSX is:
    
  ``` 
<Component>...Content...</Component>
A typical component in React would look like:
<div>This is a div</div> // displays a block of text
<Clock timezone="gmt" /> // displays a clock with the current time
        
 ```

##  Superpowers of JSX
    
* Embedding Expressions in JSX
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
        
* JSX is an Expression Too
      
After compilation, JSX expressions become regular JavaScript function calls and evaluate to   JavaScript objects.You can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions

* Specifying Attributes with JSX
* JSX Prevents Injection Attacks

It is safe to embed user input in JSX:

const title = response.potentiallyMaliciousInput;
```
// This is safe:
const element = <h1>{title}</h1>;
```


      
 ##  Role of type  attribute in script tag
 
 The type attribute specifies the type of the script.
 The type attribute identifies the content between the <script> and </script> tags.
 ```
 <script type="" src="app.js"></script>
 ```     
 We can use below values in type
 + A JavaScript MIME type like: application/javascript (default) or application/ecmascript
  module
 + Another MIME type. src attribute will be ignored


 ##  { TitleComponent } vs { <TitleComponent /> } vs { <TitleComponent> </TitleComponent> } in JSX

 ** { TitleComponent }** -- this will be treated as variable or jsx expression, if no such variable is present,  you get a warning : 
  ```Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.```
  
  
**{ <TitleComponent /> }** - this renders component and is self closing tag

**{ <TitleComponent> </TitleComponent> }** - if no children components , this will render as <TitleComponent />  else it will render along with its children.
 


  
  





 
   




