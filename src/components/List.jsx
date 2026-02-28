// This is a normal React functional component
function List() {
  // This is a normal JavaScript array
  // It stores 3 fruit names with it's id(React tracks by identity, not position, that's why we use id rather than index).

  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" },
  ];

  // Whatever we return here will be shown on the screen
  return (
    <div>
      {/* This is just a heading */}
      <h2>Fruit List</h2>

      {/* 
        We use map() to loop over the array.
        For each fruit in the array,
        we return a <p> element.
      */}

      {fruits.map((fruit) => (
        
        // key is required by React when rendering lists. 
        // It helps React identify each item uniquely. 

        <p key={fruit.id}>{fruit.name}</p>
      ))}
    </div>
  );
}

// We export this component so App.jsx can use it
export default List;
