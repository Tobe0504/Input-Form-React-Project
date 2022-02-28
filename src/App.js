import React, { useState } from "react";
import AddUserInput from "./Components/AddUserInput";
import UserList from "./Components/UserList";
import Button from "./Components/UI/Button";
import classes from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(true);

  const addUserHandler = (data) => {
    // setUsers((prevUserList) => {
    //   return [...prevUserList, { name: name, age: age }];
    // });
    const newData = [...users, data];
    setUsers(newData);
    console.log(newData);
  };

  const formShowHandler = () => {
    setShow(!show);
    setContent(!content);
  };

  return (
    <React.Fragment>
      {show ? <AddUserInput onAddUser={addUserHandler} /> : null}
      {content ? (
        <div className={classes.buttonDiv}>
          <Button onClick={formShowHandler} className={classes.button}>
            Show Form
          </Button>
        </div>
      ) : (
        <div className={classes.buttonDiv}>
          <Button onClick={formShowHandler} className={classes.button}>
            Hide Form
          </Button>
        </div>
      )}
      <UserList user={users} />
    </React.Fragment>
  );
}

export default App;
