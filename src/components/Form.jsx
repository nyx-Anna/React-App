import { useState } from "react";
// We import useState because we need state to store input values

function Form() {
  //STATE DECLARATION
  // These states will store what user types
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //  HANDLE FORM SUBMISSION

  const handleSubmit = (event) => {
    // Prevents page from refreshing when form submits
    event.preventDefault();

    // Validation check
    if (!name || !email) {
      alert("All fields required");
      return; // stop submission
    }

    // Log all values to console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear all fields after submit
    setName("");
    setEmail("");
    setMessage("");
  };

  // JSX RETURN
  return (
    <div>
      <h2>Contact Form</h2>

      {/* onSubmit runs when user clicks submit button */}

      <form onSubmit={handleSubmit}>
        {/* NAME INPUT */}
        <input
          type="text"
          placeholder="Enter your name"
          // value connects input to React state
          value={name}
          // onChange updates state whenever user types
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        {/* EMAIL INPUT */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        {/* MESSAGE TEXTAREA */}
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;