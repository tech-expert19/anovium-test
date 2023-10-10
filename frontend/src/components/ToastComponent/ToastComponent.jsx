/* eslint-disable react/prop-types */
import React from 'react'
import ToastContainer from 'react-bootstrap/ToastContainer'

import SingleToast from './SingleToast'
import MultipleToasts from './MultipleToasts'

const ToastComponent = (props) => {
    // Usage: pass message object with heading and content keys, or pass a list of messages
    // E.g. <ToastComponent messageList={myMessageList}/>
    // E.g. <ToastComponent message={myMessageObject}/>

    const { message, messageList } = props

    let variant = 'danger'
    props.variant
        ? (variant = props.variant.toLowerCase())
        : (variant = 'primary')

    let inside = <></>
    // if both message and messageList are passed, only show message List
    if (message && messageList) {
        inside = <MultipleToasts messageList={messageList} variant={variant} />
    } else if (!message && messageList) {
        inside = <MultipleToasts messageList={messageList} variant={variant} />
    } else if (message && !messageList) {
        inside = <SingleToast message={message} variant={variant} />
    }

    return (
        <ToastContainer position="top-end" className="p-3">
            {inside}
        </ToastContainer>
    )
}

export default ToastComponent
