# React Interview Questions

1) React fundamentals
    1) <a href='#r1-1'>What is JSX? How to write it in Program?</a>
    1) <a href='#r1-2'>What is Props in a component?</a>
    1) <a href='#r1-3'>How do you show props value? Explain destructuring of props</a>
    1) <a href='#r1-4'>What is a state in a component?</a>
    1) <a href='#r1-5'>What exactly is lazy initalitation?</a>
    1) <a href='#r1-6'>What is the advantage of usinj JSX?</a>
    1) <a href='#r1-7'>useEffect questions</a>
1) Cap2


<h2 id='r1-1'>What is JSX? How to write it in Program?</h2>
JSX is the HTML you write in JavaScript. 

<h2 id='r1-2'>What is Props in a component?</h2>
The data passed as attribute in the component tag. It is passed as an Object Literal in the function

<h2 id='r1-3'>How do you show props value?</h2>
With curley brackets and inside we access the values of the object

Destructuring: You can destructuring the object literal (props)

```
const {name, age} = props;
```
You can destructuring in the argument also:

```
function PersonInfo({name, age}){}
```

<h2 id='r1-4'>What is a state in a component?   </h2>
States basically contain the data which changes and it is the data which the user sees. Yo can use variables that change in the code but not in the user interface, so we don't take those variables as states 
The useState() hook is a way React gives to manage the state. This hook always return an array with tow elements, the first element is the value of the variable, and the second the Setter function to update that variable.

<h2 id='r1-5'>What exactly is lazy initalitation?</h2>
Is the way to set the inital state only once, so the code does not run every time there is a render for the component. To do so, you put and arrow function before the inital state. Lazy initalization is commonly use where there is an expensive process for getting the data of the initial state of a variable:

```
const [cnt, setCount] = useState(()=>initialState())
```

<h2 id='r1-6'>What is the advantage of usinj JSX?</h2>
JSX prevents injection attacks as the values are embedded in JSX before rendering, 
so you can never inject anything that's not explicitly written in your application.

<h2 id='r1-7'>useEffect questions</h2>

1. Do you have life cycle methods in a functional component?

No, that's way there is the useEffect() hook.

2. What is the purpose of useEffect() hook?

componentDidMount(), componentDidUpdate(), componentWillUnmount()

3. Create a counter with setInterval:

```
function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(++count)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <h1>{count}</h1>
    </>

  )
}
```
*It is important to clear the interval
