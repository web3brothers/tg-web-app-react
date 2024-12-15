import './Button.css';
import React from 'react';

const Button = (props) => {
    return <button {...props} className={'button' + (props.className ? '' + props.className : '')}>
        
    </button>;
}

export default Button;