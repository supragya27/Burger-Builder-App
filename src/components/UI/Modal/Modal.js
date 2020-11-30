import React from 'react'
import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.css'

function Modal(props) {
    return (
        <Aux>
        <Backdrop clicked={props.modalClosed} show={props.show}/>
        <div
        style={{
            transform: props.show ? 'translateY(0)' :'translateY(-100vh)',
            opacity: props.show ? '1' :'0'
        }} 
        onClick={props.clicked}
        className={classes.Modal}>
            {props.children}
        </div>
        </Aux>
    )
}

export default Modal
