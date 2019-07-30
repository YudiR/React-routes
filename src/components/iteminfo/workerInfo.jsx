import React from 'react'

const WorkerInfo =  (props) =>{
return (
    <React.Fragment>
        {props.worker ?
        <div>
            <h1>{props.worker.name}</h1>
        </div> : <h2> LOADING...</h2>}
    </React.Fragment>
)
}

export default WorkerInfo