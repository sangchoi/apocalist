import React from 'react';

const ProcedureShow = (props) => {
    let procedure = props.procedures.find((procedure) => {
        return procedure.id === parseInt(props.match.params.id)
    })
    console.log(props.match.params.id);
    return (
        <div>
            <h1>{procedure.name}</h1>
            <p>It hurts a lot</p>
        </div>
    )
}

export default ProcedureShow;