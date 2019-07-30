import React from 'react'
import { conditionalExpression } from '@babel/types';
const Shop = props =>{
    return (
        <React.Fragment>
        <h1> about the Shop!!!!</h1>
        <h2> our workers</h2>

        {props.data ?  
        (props.data.map((e,i) => (
         <h4 key = {i} 
         onClick={event => {
            props.click(e.id);
            console.log("ROUTE:::",`/shop/${e.id}`,props);
            
            props.history.push(`/shop/${e.id}`);

        }}
         > {e.name}</h4>   
        )))
        : null}
        </React.Fragment>
    )
}
 
export default Shop 