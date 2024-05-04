import React from 'react'
import { useContext } from 'react'
import Context from './Context';

function UContext() {

    const data = useContext(Context);
    console.log(data);

    return (
        <div>Assalam-U-Alikum !!!! My Name is {data} </div>
    )
}

export default UContext;