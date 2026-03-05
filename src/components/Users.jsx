import { useState, useEffect } from "react";

function Users() {

  // state to store the users we get from API
  const [users, setUsers] = useState([]);

  // state to track loading status
  // initially true because data has not been fetched yet
  const [loading, setLoading] = useState(true);

  // state to store any error that happens during fetch
  const [error, setError] = useState(null);


  // useEffect runs after the component renders
  // empty dependency array [] means it runs only once
  useEffect(() => {

    // create an async function to fetch data
    const fetchUsers = async () => {

      try {

        // start loading
        setLoading(true);

        // send request to API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // check if response is successful
        // if not, throw an error manually
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        // convert response into JSON (JS object)
        const data = await response.json();

        // store the users data into state
        setUsers(data);

      } catch (err) {

        // if any error happens (network/server/etc)
        // store the error message in state
        setError(err.message);

      } finally {

        // stop loading no matter success or failure
        setLoading(false);

      }
    };

    // call the function
    fetchUsers();

  }, []); // run only once when component loads


  return (
    <div>

      <h2>Users List</h2>

      {/* if loading is true show loading message */}
      {loading && <p>Loading users...</p>}

      {/* if error exists show error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* if loading finished and no error, show users */}
      {!loading && !error && (

        <div>

          {/* loop through users array */}
          {users.map((user) => (

            <div key={user.id} style={{ marginBottom: "15px" }}>

              {/* display user name */}
              <p><strong>{user.name}</strong></p>

              {/* display email */}
              <p>{user.email}</p>

              {/* display company */}
              <p>{user.company.name}</p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Users;