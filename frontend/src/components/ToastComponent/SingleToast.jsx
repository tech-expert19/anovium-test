/* eslint-disable react/prop-types */
import React from 'react'
import { useState, useEffect } from 'react'
import Toast from 'react-bootstrap/Toast'

const SingleToast = (props) => {
    const { message, variant } = props
    const [show, setShow] = useState(true)
    const delay = 3000

    useEffect(() => {
        if (message && variant) {
            setShow(true)
        }
    }, [message, variant])

    return (
        <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={delay}
            autohide
            bg={variant}
        >
            <Toast.Header>
                <strong className="me-auto">{message.heading}</strong>
            </Toast.Header>
            <Toast.Body className="text-white">{message.content}</Toast.Body>
        </Toast>
    )
}

export default SingleToast
