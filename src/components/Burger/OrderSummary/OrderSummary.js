import React from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

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
            <p><strong>Total Price: ${props.price}</strong></p>
            <p>Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary
