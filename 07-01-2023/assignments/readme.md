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

    
