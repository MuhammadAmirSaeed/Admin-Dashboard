import React from 'react'
import { Link } from 'react-router-dom'

const SidebarButton = ({ path, icon, text }) =>
{
    return (
        <>
            <Link to={ path }>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    { icon }
                    <li>{ text }</li>
                </span>
            </Link>
        </>
    )
}

export default SidebarButton
