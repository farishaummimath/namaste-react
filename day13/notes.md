## Why do we need test cases?

    In large scale applications, there are so many developers that contribute to the development. There will be many components. 

## test driven development 

    * time consuming development but its very good
    * needs different mindset 
    * Eg : there is a test
        test('sum of 2 numbers',()=>{
            expect(sum(2,4)).toBe(6);
            expect(sum(4)).toBe(4);
            expect(sum()).toBe('Please check inputs')
        })

        export const sum = (a,b) =>{
            return a + b;
        }
##  Types of testing
    
    * Manual testing
    * Automated testing - code testing a code
    * End to end testing - Cypress, simulate user journey
        - Headless browsers- Headless, means a Web Browser without User Interface. To elaborate, Headless Browsers are those which actually access the Web Page, but the GUI is hidden from the user.
        - there will be virtual dom, but no painting
    * Unit testing  - testing small units
    * Integration testing - testing integration between different components.

## test library we will use in project

    Jest - javascript testing framework - easy to use, 
    react- react testing library - uses Jest behind 
## Installation

    install @testing-library/react
    install jest
    configure jest

    npm and npx - npx to execute once, 
    so we do npx jest --init 
        - create jest.config.js
## run tests

     "test": "jest" in script - >  npm run test
     // got error - As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.
     so after jest 28 , jest-environment-jsdom needs to be installed separately

     npm i -D jest-environment-jsdom

     create test folder __test__
        add sum.test.js test file

## Error in test run script

    SyntaxError: Cannot use import statement outside a module

    Normal js file do not understand import
     type = module

     we need to take babel help- we need to create 
     babel.config.js ->
     module.exports = {
        presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };
    but we already have .babelrc file but the above config wil give error
    .babelrc  requires json
    so configure babel and add above as  "presets": [["@babel/preset-env", {"targets": {"node": "current"}}]] json takes in quote

## adding tests to food app
    When Header Loads, 
        expect logo to be there
        cart items 0
        online status true

    We use render from testing library

    like we do root.render() in app.js

    ['@babel/preset-react', {runtime: 'automatic'}], - code was not understanding jsx

    now it imports  Header and gets the image error as it trying to read it as JS but image is a png file

    so adding moduleNameMapper for jpeg png and svg in jest config js

    now new error for redux and Provider

    so added Provider and store



## adding 2 more tests
## adding search tests 
    fetch function is mocked







    


        






