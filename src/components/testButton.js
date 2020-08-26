import React from 'react';
import Button from 'react-bootstrap/Button';

function click() {
    alert('Clicked')
}

function NewButton() {
    return(
        <Button onClick={click}>Click Here</Button>
    )
}

export default NewButton;