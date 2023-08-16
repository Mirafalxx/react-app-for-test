import React, { useState, useEffect } from "react";

const ChildComp = () => {
  const [result, setResult] = useState({});
  const [user, setUser] = useState({ name: "", age: "" });
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setResult(json);
        console.log(json);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const renderList = () => {
    return (
      <>
        <input name="name" onChange={inputChangeHandler} />
        <input name="age" onChange={inputChangeHandler} />
        <button onClick={() => console.log(user)}>trig</button>
        <div>
          {[0, 1, 2, 3, 4, 5].map((item) => {
            return <div key={item}>{item}</div>; // Changed the content to display 'item'
          })}
        </div>
      </>
    );
  };

  return <div>{renderList()}</div>; // Invoke the function to return JSX
};

export default ChildComp;
