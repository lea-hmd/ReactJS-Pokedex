import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <ul>
                <Link to="/Details">
                    <li>Details</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation
