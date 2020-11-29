import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

function Burger(props) {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey=>{
        return[...Array(props.ingredients[ingKey])]
        .map((_,i)=>{
            return <BurgerIngredient key={ingKey+i} type={ingKey}/>
        })
    })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger
