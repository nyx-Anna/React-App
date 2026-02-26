// Importing useState hook from React.
import { useState } from "react";

//Counter component receiving props
// We are destructuring props into title and initialValue.
function Counter({ title, initialValue }) {
  /* useState is a Hook that allows us to store and update state.

  count -> current value
  setCount -> function to update count
  initialValue -> starting value(coming from props)
  */
  const [count, setCount] = useState(initialValue);//useState(initialValue) does not "watch" the prop.It just uses it to initialize once.(if u want counter to update when props changes(u need useEffect) which is NOT RECOMMENDED).

  // Function to increase count by 1
  const increment = () => {
    setCount(count + 1); //Updating state ->triggers re-render
  };

  //Function to decrease count by 1
  const decrement = () => {
    //Preventing negative numbers
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //Function to reset count to original initialValue
  const reset = () => {
    setCount(initialValue);
  };

  return (
    /* 
    JSX section.
    This is what gets rendered on screen.
    */
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{title}</h2>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ margin: "10px" }}>
        -
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Exporting component so App.jsx can use it
export default Counter;
