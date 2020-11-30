import React from 'react'
import Aux from '../../../hoc/Auxiliary'

function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey=>{
            return (<li key={ingKey}>
            <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}  
            </li>)
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Checkout?</p>
        </Aux>
    )
}

export default OrderSummary
