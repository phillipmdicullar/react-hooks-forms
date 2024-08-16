import React, { useState } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

function ParentComponent() {
    const [firstName, setFirstname] = useState('kenyan')
    const [lastName, setLastname] = useState('james')
    function handleFirstNameChange(event) {
        setFirstname(event.target.value)

    }
    function handleLastNameChange(event) {
        setLastname(event.target.value)
    }
    return (
    <>
    </>
    )
}

export default ParentComponent