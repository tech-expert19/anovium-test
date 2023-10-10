/* eslint-disable react/prop-types */
import React from 'react'
import { useState, useEffect } from 'react'
import Toast from 'react-bootstrap/Toast'

const MultipleToasts = (props) => {
    const { messageList, variant } = props

    // show by default
    const [showList, setShowList] = useState(
        Array(messageList.length)
            .fill()
            .map(() => true)
    )
    // delay increased by 1 second for each extra message
    let delay = messageList.length * 1000 + 2000

    const handleClose = (i) => {
        const show_list = [...showList]
        show_list[i] = false
        setShowList(show_list)
    }

    useEffect(() => {
        if (messageList && variant) {
            setShowList(
                Array(messageList.length)
                    .fill()
                    .map(() => true)
            )
        }
    }, [messageList, variant])

    return (
        <>
            {messageList.map((message, idx) => (
                <Toast
                    key={idx}
                    onClose={() => handleClose(idx)}
                    show={showList[idx]}
                    delay={delay}
                    autohide
                    bg={variant}
                >
                    <Toast.Header>
                        <strong className="me-auto">{message.heading}</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">
                        {message.content}
                    </Toast.Body>
                </Toast>
            ))}
        </>
    )
}

export default MultipleToasts
