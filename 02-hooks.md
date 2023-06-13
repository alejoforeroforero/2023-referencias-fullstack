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



