import React from "react";
import ReactDom from "react-dom"
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./ErrorModal.module.css";

const BackDrop = (props) =>{
    return(
        <div className = {classes.backdrop} onClick = {props.onClick}/>
    )
}

const ModalOverlay = (props) =>{
    return(
    <Card className = {classes.modal}>
        <header className = {classes.header}>
            <h2>{props.header}</h2>
        </header>

        <div className = {classes.body} >
            <p>{props.body}</p>
        </div>
        <footer className = {classes.footer}>
            <Button onClick = {props.onClick}>Okay</Button>
        </footer>
    </Card>
    )
}

const ErrorModal = (props) =>{
    return (
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop onClick = {props.onClick}/>, document.getElementById("backdrop"))}
            {ReactDom.createPortal(<ModalOverlay  header = {props.header} body = {props.body} onClick = {props.onClick}/>, document.getElementById("modal-overlay"))}
        </React.Fragment>
    )
}

export default ErrorModal