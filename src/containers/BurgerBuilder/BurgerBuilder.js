import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Auxiliary'

export class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger/>
                <div>Build controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder
