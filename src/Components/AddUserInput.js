import React , {useState, useRef, useEffect} from "react";
import Button from "./UI/Button"
import ErrorModal from "./ErrorModal"
import classes from "./AddUserInput.module.css"
import Card from "./UI/Card"

const AddUserInput = (props) =>{
    const enteredUsername = useRef();
    const enteredUserAge = useRef();
    const [error, setError] = useState()

    useEffect(() => {
        console.log("rendered")

        return () =>{
            console.log("unrendering & rerendering")
        }
    },[])



    
    const formSubmitHandler = (event) =>{
        event.preventDefault()

        const enteredName = enteredUsername.current.value;
        const enteredAge = enteredUserAge.current.value;



        if (enteredAge.trim().length === 0 || enteredName.trim().length === 0){
            setError({
                header: "Error",
                body: "Please input your Name and  Age in years."
            })
            return
        }

        if (enteredAge < 1){
            setError({
                header: "Error",
                body: "Age should be > 1"
            })
            return
        }
        const userData = {name: enteredName, age: enteredAge}
        props.onAddUser(userData)
        console.log(props.onAddUser(userData))

        enteredUsername.current.value = "";
        enteredUserAge.current.value = ""

    }

    const onClickHandler = () =>{
        setError()
    }

    return(
        <div>
            {error && <ErrorModal header = {error.header} body = {error.body} onClick = {onClickHandler}/>}
            <Card>
                <form className = {classes.form} onSubmit= {formSubmitHandler}>
                    <div className = {classes.div}>
                    <label className = {classes.label}><b>Username</b></label>
                    <br />
                    <input type="text" className = {classes.input} ref = {enteredUsername} />
                    </div>

                    <div className = {classes.div}>
                    <label className = {classes.label}><b>Age</b> (in years)</label>
                    <br/>
                    <input type="number" className = {classes.input} ref = {enteredUserAge} />
                    </div>
                    <div  className = {classes.div}>
                    <Button>Add</Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default AddUserInput;