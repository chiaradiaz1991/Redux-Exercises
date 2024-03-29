import React from "react";
import { connect } from "react-redux";
import { completeTask } from "../../store";

function Task(props) {
    function handleClick () {
        const { dispatch } = props;
        dispatch(completeTask(props.index))
    }
    return <li onClick={()=>{handleClick()}}>{props.name} - {props.isComplete ? 'Complete' : 'Incomplete'}</li>
}

export default connect()(Task);