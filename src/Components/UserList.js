import React from "react"
import Card from "./UI/Card"

import classes from "./UserList.module.css"

const UserList = (props) =>{
    return(
        <div>
            {props.user.map(parameter => 
                <Card>
                    <div className = {classes.container}>
                        <div className = {classes.name}>
                        <b>{parameter.name}</b> <br/>
                        </div>
                        <div className = {classes.age}>
                        <p>{parameter.age}</p>
                        </div>
                    </div>
                </Card>)}
        </div>
    )
}

export default UserList