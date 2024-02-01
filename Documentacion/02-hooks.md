# Hooks

1. <a href='#hook1'>React.memo() y useCallback()</a>
1. <a href='#context'>React.createContext y useContext()</a>

  <h2 id='context'>React.createContext y useContext()</h2>

1. Create a folder named "store" to establish the context, and within it, create the component:

```
import React from 'react'

const totalContext = React.createContext(0)

export default totalContext
```

2. Import the component at the root of the components that will use it and create the Provider with the value that the context will carry.

```
import totalContext from "./store/total-context";


<totalContext.Provider value={total}>
  <Cart instrumentosS={instrumentosS} />
  <Total />
</totalContext.Provider>
```
3. Incorporate the context into your components by importing both the context itself and the useContext() hook. Establish a connection between the hook and the created context to retrieve the associated value.
```
import React, { useContext } from 'react'
import totalContext from '../store/total-context'

const Total = () => {
  let total = useContext(totalContext)
  return (
      <div className='card'>{total}</div>
  )
}
```

---

<h2 id='hook1'>React.memo() y useCallback()</h2>

### React.memo()

```
export default React.memo(Button)
```

### useCallback()

- Importante: Para que funcione, el componente al que se le aplica el useCallback debe tener useMemo()

```
import React, { useState, useCallback } from 'react'
import Header from './Header'
import Footer from './Footer'
import Numbers from './Numbers'
import Button from './Button'

const Counter = () => {
  console.log('render Counter')

  const [n, setN] = useState(0)
  const [n2, setN2] = useState(1)

  const handleN = useCallback(() => {
    setN(n + 1)
  }, [n])

  const handleN2 = useCallback(() => {
    setN2(n2 * 2)
  }, [n2])

  return (
    <>
      <Header />
      <Numbers number={n} />
      <Numbers number={n2} />
      <Button
        label='sumar'
        fx={handleN}
      />
      <Button
        label='multiplicar'
        fx={handleN2}
      />
      <Footer />
    </>
  )
}

export default React.memo(Counter)
```

- useState:

      const [variableName, fxToUpadate] = useState(true);

      const changeVariable = ()=>{

          if(variableName){
              fxToUpadate(false);
          }else{
              fxToUpadate(true);
          }

          console.log(variableName);
      }

- useState to update arrays !important:

        const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

        const addExpenseHandler = (expense) => {
          setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
          });
        };

- useEffect with a timer:

        useEffect(()=>{
          const timer = setTimeout(()=>{
            console.log('envia');
            setFormIsValid(
              enteredEmail.includes('@') && enteredPassword.trim().length > 6
            );
          }, 1000);

          return ()=>{
            console.log('cancela');
            clearTimeout(timer);
          }
        }, [enteredEmail, enteredPassword]);

- useReducer simple:

      import { useReducer } from "react";

      import "./App.css";

      const ACTIONS = {
        SUMAR:'sumar',
        RESTAR:'restar'
      }

      const reducer = (state, action) => {
        switch(action.type){
          case ACTIONS.SUMAR:
            return { numero: state.numero +1 }
          case ACTIONS.RESTAR:
            return { numero: state.numero -1 }
          default:
            return state
        }
      };

      function App() {
        const [state, dispatch] = useReducer(reducer, { numero: 0 });

        const sumar = () => {
          dispatch({ type: ACTIONS.SUMAR });
        };

        const restar = () => {
          dispatch({ type: ACTIONS.RESTAR });
        };

        return (
          <>
            <button onClick={restar}>-</button>
            <span>{state.numero}</span>
            <button onClick={sumar}>+</button>
          </>
        );
      }

      export default App;

- useReducer complex:

      import { useState, useReducer } from "react";

      import "./App.css";

      const ACTIONS = {
        ADD: "add",
        TOOGLE: "toogle",
      };

      const reducer = (todos, action) => {
        switch (action.type) {
          case ACTIONS.ADD:
            return [...todos, newTodo(action.payload.name)];
          case ACTIONS.TOOGLE:
            return todos.map((todo) => {
              if (todo.id === action.payload.id) {
                return { ...todo, complete: !todo.complete };
              }
              return todo;
            });

          default:
            return todos;
        }
      };

      const newTodo = (name) => {
        return { id: Date.now(), name: name, complete: false };
      };

      function App() {
        const [todos, dispatch] = useReducer(reducer, []);

        const [name, setName] = useState("");

        const handleOnSubmit = (e) => {
          e.preventDefault();
          dispatch({ type: ACTIONS.ADD, payload: { name: name } });
          setName("");
        };

        const handleOnChange = (e) => {
          setName(e.target.value);
        };

        const changeComplete = (todo) => {
          dispatch({ type: ACTIONS.TOOGLE, payload: { id: todo.id } });
        };

        return (
          <>
            <form onSubmit={handleOnSubmit}>
              <input type="text" value={name} onChange={handleOnChange} />
            </form>
            {todos.map((todo) => {
              return (
                <div key={todo.id} onClick={() => changeComplete(todo)}>
                  <span>{todo.name} - </span>
                  <span>{todo.complete ? "true" : "false"}</span>
                </div>
              );
            })}
          </>
        );
      }

      export default App;
