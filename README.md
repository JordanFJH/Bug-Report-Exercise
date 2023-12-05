# Level 1

## Problem 1
    Module not found: Error: You attempted to import ../level1/Main which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
You can either move it inside src/, or add a symlink to it from project's node_modules/.
### Solution
    Changed path to this
        import FirstLevel from "./level1/Main"
## Problem 2
    ERROR in ./src/level1/Main.js 5:0-19
Module not found: Error: Can't resolve './App.css' in 'E:\_Per Scholas\Coding Area 2\_Morning-Exercises\12-5-23-Buggy-React\src\level1'

### Solution
    Changed import path to
        import "../App.css"

## Problem 3
    ERROR in ./src/level1/Main.js 6:0-42
Module not found: Error: Can't resolve 'randomLibrary' in 'E:\_Per Scholas\Coding Area 2\_Morning-Exercises\12-5-23-Buggy-React\src\level1'

### Solution
    Commented out - import randomLibrary from "randomLibrary"
        I have no idea what library it was supposed to be importing from

## Problem 4
    ERROR
[eslint] 
src\level1\Main.js
  Line 5:25:  'useState' is not defined  no-undef

### Solution
    Inserted - import { useState } from "react";

## Problem 5
    Uncaught TypeError: Cannot read properties of undefined (reading 'main')

### Solution
    Removed from line 10 - setText('')

## Problem 6
    Main.js:12 Uncaught TypeError: Cannot read properties of undefined (reading 'main')

### Solution 
    Changed {text.text.level1.main} to {text.text}

## Problem 7
    ERROR
Objects are not valid as a React child (found: object with keys {text}). If you meant to render a collection of children, use an array instead.

### Solution
    Removed this line from line 14 {text}
        React was trying to print an object, it don't do dat



# Level 2

## Problem 1
    ERROR in ./src/level2/Main.js 5:0-22
Module not found: Error: Can't resolve './styles.css' in 'E:\_Per Scholas\Coding Area 2\_Morning-Exercises\12-5-23-Buggy-React\src\level2'

### Solution
    Created the styles css that it's referring to
    Changed import "./styles.css"; to import "../styles.css";

## Problem 2
    ERROR in ./src/level2/Main.js 46:35-43
export 'TodoList' (imported as 'TodoList') was not found in './components/TodoList' (possible exports: default)

### Solution
    Removed the default coming form the main component due to its syntax being destructured, or however you spell it

## Problem 3
    Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\_Per Scholas\Coding Area 2\_Morning-Exercises\12-5-23-Buggy-React\src\level2\components\TodoList.js: Unexpected token, expected "{" (32:7)

### Solution
    Enclosed entire array.map in {} so React knows it is a JS coded

## Problem 4
    Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\_Per Scholas\Coding Area 2\_Morning-Exercises\12-5-23-Buggy-React\src\level2\components\Todo.js: JSX value should be either an expression or a quoted JSX text. (7:17)

### Solution
    Changed onChange=() => completeTodo(item.id) to onChange={() => completeTodo(item.id)}
    Enclosed onchange function call in curly brackets

## Problem 5
ERROR in ./src/level2/components/TodoList.js 26:61-65
export 'default' (imported as 'Todo') was not found in './Todo' (module has no exports)

### Solution
    Added export default to the function in Todo so it can be imported in TodoList

## Problem 6
    ERROR
[eslint] 
src\level2\components\TodoList.js
  Line 4:23:   'todoss' is not defined        no-undef
  Line 24:25:  'completeTodo' is not defined  no-undef

### Solution
 Changed "todoss" to "todos"
Called the completetodo function in teh TodoList parameter destructuring call

## Problem 7
ERROR
Cannot read properties of undefined (reading 'filtrer')

### Solution
    Uncommented the todos array being passed to the TodoList component

## Problem 8
    Cannot read properties of null (reading 'filter')
TypeError: Cannot read properties of null (reading 'filter')

### Solution
Changed initial state of todo array to an empty array

## Problem 9 
Warning: `value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.

### Solution
    Changed the initial state of the input variable to be an empy string

## Problem 10
Warning: Unknown event handler property `onChanges`. It will be ignored.


### Solution
 changed "onChanged" to "Onchange"
    Just a spelling error

## Problem 11
    react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.

### Solution
Added a key property to the parent mapping in the TodoList and set it to the index of the individual key

## Problem 12
    Warning: Invalid DOM property `class`. Did you mean `className`?

### Solution
    Changed "Class" to "Classname"












# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Bug-Report-Exercise
