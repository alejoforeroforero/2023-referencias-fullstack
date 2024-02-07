#### Q2. If a function component should always render the same way given the same props, what is a simple performance optimization available for it?

- [ ] Wrap it in the `React.memo` higher-order component.
- [ ] Implement the `useReducer` Hook.
- [ ] Implement the `useMemo` Hook.
- [ ] Implement the `shouldComponentUpdate` lifecycle method.

-

- [x] Wrap it in the `React.memo` higher-order component.
- [ ] Implement the `useReducer` Hook.
- [ ] Implement the `useMemo` Hook.
- [ ] Implement the `shouldComponentUpdate` lifecycle method.

#### Q3. How do you fix the syntax error that results from running this code?

```javascript
const person =(firstName, lastName) =>
{
  first: firstName,
  last: lastName
}
console.log(person("Jill", "Wilson"))
```

- [ ] Wrap the object in parentheses.
- [ ] Call the function from another file.
- [ ] Add a return statement before the first curly brace.
- [ ] Replace the object with an array.

- 

- [x] Wrap the object in parentheses.
- [ ] Call the function from another file.
- [ ] Add a return statement before the first curly brace.
- [ ] Replace the object with an array.

#### Q10. What is the name of the tool used to take JSX and turn it into createElement calls?

- [ ] JSX Editor
- [ ] ReactDOM
- [ ] Browser Buddy
- [ ] Babel

- 

- [ ] JSX Editor
- [ ] ReactDOM
- [ ] Browser Buddy
- [x] Babel

#### Q15. What does this React element look like given the following function? (Alternative: Given the following code, what does this React element look like?)

```javascript
React.createElement('h1', null, "What's happening?");
```

- [ ] `<h1 props={null}>What's happening?</h1>`
- [ ] `<h1>What's happening?</h1>`
- [ ] `<h1 id="component">What's happening?</h1>`
- [ ] `<h1 id="element">What's happening?</h1>`

-

- [ ] `<h1 props={null}>What's happening?</h1>`
- [x] `<h1>What's happening?</h1>`
- [ ] `<h1 id="component">What's happening?</h1>`
- [ ] `<h1 id="element">What's happening?</h1>`

#### Q17. What do you call the message wrapped in curly braces below?

```javascript
const message = 'Hi there';
const element = <p>{message}</p>;
```

- [ ] a JS function
- [ ] a JS element
- [ ] a JS expression
- [ ] a JSX wrapper

- 

- [ ] a JS function
- [ ] a JS element
- [x] a JS expression
- [ ] a JSX wrapper

#### Q19. When do you use `useLayoutEffect`?

- [ ] to optimize for all devices
- [ ] to complete the update
- [ ] to change the layout of the screen
- [ ] when you need the browser to paint before the effect runs

[Source] (https://react.dev/reference/react/useLayoutEffect)
"useLayoutEffect is a version of useEffect that fires before the browser repaints the screen."

[Explanation]The correct answer to the question "When do you use useLayoutEffect?" is:

When you need to change the layout of the screen.

useLayoutEffect is used when you need to perform DOM mutations that rely on the updated layout of the elements. It allows you to make changes to the DOM synchronously before the browser performs its painting step. This can be useful when you need to measure or manipulate the layout, such as accessing element dimensions or positions, calculating scroll offsets, or performing other operations that require up-to-date layout information.

The other option provided as answer is not accurate:

"When you need the browser to paint before the effect runs" is not correct. The purpose of useLayoutEffect is to run the effect synchronously after the DOM updates but before the browser paints, allowing you to make layout-related changes before the visual rendering occurs.

**Explanation:**
`useLayoutEffect` gets executed _before_ the `useEffect` hook without much concern for DOM mutation. Even though the React hook `useLayoutEffect` is set after the `useEffect` Hook, it gets triggered first!

- [ ] to optimize for all devices
- [ ] to complete the update
- [x] to change the layout of the screen
- [ ] when you need the browser to paint before the effect runs

#### Q20. What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?

```javascript
A. <button onClick={this.handleClick}>Click Me</button>
B. <button onClick={event => this.handleClick(event)}>Click Me</button>
```

- [ ] Button A will not have access to the event object on click of the button.
- [ ] Button B will not fire the handler this.handleClick successfully.
- [ ] Button A will not fire the handler this.handleClick successfully.
- [ ] There is no difference.

- 

- [ ] Button A will not have access to the event object on click of the button.
- [ ] Button B will not fire the handler this.handleClick successfully.
- [ ] Button A will not fire the handler this.handleClick successfully.
- [x] There is no difference.

#### Q22. When might you use `React.PureComponent`?

- [ ] when you do not want your component to have props
- [ ] when you have sibling components that need to be compared
- [ ] when you want a default implementation of `shouldComponentUpdate()`
- [ ] when you do not want your component to have state

[Reference](https://reactjs.org/docs/react-api.html#reactpurecomponent)

- [ ] when you do not want your component to have props
- [ ] when you have sibling components that need to be compared
- [x] when you want a default implementation of `shouldComponentUpdate()`
- [ ] when you do not want your component to have state


#### Q25. Which attribute is React's replacement for using innerHTML in the browser DOM?

- [ ] injectHTML
- [ ] dangerouslySetInnerHTML
- [ ] weirdSetInnerHTML
- [ ] strangeHTML

[Reference](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

- [ ] injectHTML
- [x] dangerouslySetInnerHTML
- [ ] weirdSetInnerHTML
- [ ] strangeHTML

#### Q27. When using webpack, why would you need to use a loader?

- [ ] to put together physical file folders
- [ ] to preprocess files
- [ ] to load external data
- [ ] to load the website into everyone's phone
-
- [ ] to put together physical file folders
- [x] to preprocess files
- [ ] to load external data
- [ ] to load the website into everyone's phone

#### Q31. What do you call a React component that catches JavaScript errors anywhere in the child component tree?

- [ ] error bosses
- [ ] error catchers
- [ ] error helpers
- [ ] error boundaries
-
- [ ] error bosses
- [ ] error catchers
- [ ] error helpers
- [x] error boundaries

[Reference](https://www.geeksforgeeks.org/react-js-error-boundaries/)

#### Q38. Why is it a good idea to pass a function to `setState` instead of an object?

- [ ] It provides better encapsulation.
- [ ] It makes sure that the object is not mutated.
- [ ] It automatically updates a component.
- [ ] `setState` is asynchronous and might result in out of sync values.

[Reference](https://medium.com/@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1)

**Explanation:** Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

- [ ] It provides better encapsulation.
- [ ] It makes sure that the object is not mutated.
- [ ] It automatically updates a component.
- [x] `setState` is asynchronous and might result in out of sync values.

#### Q39. What package contains the render() function that renders a React element tree to the DOM?

- [ ] `React`
- [ ] `ReactDOM`
- [ ] `Render`
- [ ] `DOM`
-
- [ ] `React`
- [x] `ReactDOM`
- [ ] `Render`
- [ ] `DOM`
 