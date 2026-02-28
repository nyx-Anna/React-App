//Importing the Counter component from components folder.
import Counter from "./components/Counter";

//Importing the Form component from components folder.
import Form from "./components/Form";

//Importing the List component from components folder.
import List from "./components/List";

function App() {
  return (
    //this is the root cointainer.
    <div>


      {/* Here We are rendering Counter component.
      Passing two props:
      1. title-> text to display.
      2. initialValue -> starting value of counter.
      
      We can also create counters with different initialValues (like below).
      */}
      <Counter title="Simple Counter A" initialValue={0} />

      <Counter title="Simple Counter B" initialValue={10} />

      <Counter title="Simple Counter C" initialValue={100} />

<hr />
      {/* Here are rendering form component and List component */}
      <Form />

      <hr />
      
      <List />
    </div>
  );
}

export default App;