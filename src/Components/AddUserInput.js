import React, { useState, useRef, useEffect } from "react";
import Button from "./UI/Button";
import ErrorModal from "./ErrorModal";
import classes from "./AddUserInput.module.css";
import Card from "./UI/Card";

const AddUserInput = (props) => {
  const enteredUsername = useRef();
  const enteredUserAge = useRef();
  const [error, setError] = useState();
  const [isValidName, setIsValidName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

  useEffect(() => {
    // setError({
    //   header: "Welcome!",
    //   body: "Please double-click on any added item to delete it",
    // });
    // return () => {
    //   console.log("unrendering & rerendering");
    // };
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = enteredUsername.current.value;
    const enteredAge = enteredUserAge.current.value;

    if (enteredAge.trim().length === 0 && enteredName.trim().length === 0) {
      setError({
        header: "Error",
        body: "Please input your Name and  Age in years.",
      });
      setIsValidName(false);
      setIsValidAge(false);
      return;
    }

    if (enteredAge < 1) {
      setError({
        header: "Error",
        body: "Age should be > 1",
      });
      setIsValidAge(false);
      return;
    }

    if (!enteredName) {
      setError({
        header: "Error",
        body: "Please input a username",
      });
      setIsValidName(false);
      return;
    }

    const userData = { name: enteredName, age: enteredAge, key: Math.random() };
    props.onAddUser(userData);
    // console.log(props.onAddUser(userData));

    enteredUsername.current.value = "";
    enteredUserAge.current.value = "";

    setIsValidName(true);
    setIsValidAge(true);
  };

  const onClickHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          header={error.header}
          body={error.body}
          onClick={onClickHandler}
        />
      )}
      <Card>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div className={classes.div}>
            <label className={classes.label}>
              <b>Username</b>
            </label>
            <br />
            <input
              type="text"
              className={
                isValidName ? `${classes.input}` : `${classes.inputInvalid}`
              }
              ref={enteredUsername}
            />
          </div>

          <div className={classes.div}>
            <label className={classes.label}>
              <b>Age</b> (in years)
            </label>
            <br />
            <input
              type="number"
              className={
                isValidAge ? `${classes.input}` : `${classes.inputInvalid}`
              }
              ref={enteredUserAge}
            />
          </div>
          <div className={classes.div}>
            <Button>Add</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUserInput;
