import React from 'react'
import './Card.scss'

export default function Card({ ...props }) {
    return (
        <aside className="ez-aisde-holder overflow-hidden p-4">
            <ul className="list-unstyled aside-nav-list">
                <li className="position-relative">
                    ID: {props.data.id}
                </li>
                <li className="position-relative">
                    Destination address: {props.data.destination_address}
                </li>
                <li className="position-relative">
                    Return Address: {props.data.return_address}
                </li>
                <li className="position-relative">
                    Creation Date: {(new Date(props.data.created_at)).toLocaleDateString()}
                </li>
            </ul>
        </aside>
    )
}
