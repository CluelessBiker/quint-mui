import React from 'react'
import Links from './Links'

const Navbar = () => {
    return (
        <div>
            <Links title="Home" urlpath=""/>
            <Links title="Chat" urlpath=""/>
            <Links title="Employees" urlpath=""/>
            <Links title="Settings" urlpath=""/>
        </div>
    )
}

export default Navbar