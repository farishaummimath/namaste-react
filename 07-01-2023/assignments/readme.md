### 1. Is JSX mandatory for React ? 
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

### 2. Is ES6 mandatory for React ?

If you don’t use ES6 yet, you may use the create-react-class module instead:

```
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
    render: function() {
        return <h1>Hello, {this.props.name}</h1>;
    }
});
```
The API of ES6 classes is similar to createReactClass() with a few exceptions.

### 3. { TitleComponent } vs { <TitleComponent /> } vs { <TitleComponent> </TitleComponent> } in JSX

** { TitleComponent }** -- this will be treated as variable or jsx expression, if no such variable is present,  you get a warning : 
  ```Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.```
  
  
{ <TitleComponent /> }  - this renders component and is self closing tag

{ <TitleComponent> </TitleComponent> } - if no children components , this will render as <TitleComponent />  else it will render along with its children.

### 4. How can I write comments in jsx ?

JSX comments begin and end with curly braces {} . Followed by the opening curly brace is a forward slash and an asterisk. After that is the comment and lastly, an asterisk, a forward slash and the closing curly brace.

```
const Title = () => {
   return ( 
      <h1>Namaste React</h1> 
      { /* This is single line comment */}
      {/*
      *
      * This is a multi line comment
      *
      */} 
   )
}
```

### 5.  What is <React.Fragment></React.Fragment> and <></> ?

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
```
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

<></> is shorter syntax you can use for declaring fragments. It looks like empty tags.

It doesn’t support keys or attributes like `React.Fragment`

### 6. What is virtual DOM ?

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

### 7.What is Reconciliation in react ?

Reconciliation is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM. In this context, the virtual DOM will contain the new state of the component.

### 8. What is React Fiber ?

Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

### 9. Why do we need key in React ? When do we need keys in React ?

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```
The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:
```
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

### 10. What are props in React and different ways to use props ?

Props are arbitrary inputs (called “props”) that components accepts and return React elements describing what should appear on the screen.

Props can be HTML attributes like className, src used in HTML elements.
Props can passed as arguments to the components

```
<Header title={"this is a heading"} className="heading">


function Person(props) { --//  Pass in props as an argument
  const name = props.name;
  const age = props.age;
    return (
      <div>
        <h1>My name is {name}.</h1>
        <p> I am {age}.</p>
      </div>
    );
}

export default Person;

function Person({name,age}) { --//  props with destructuring
    return (
      <div>
        <h1>My name is {name}.</h1>
        <p> I am {age}.</p>
      </div>
    );
}

Person.defaultProps = { // default props
    name: "Farisha",
    age: "30"
  }
export default Person;
```








 

    
