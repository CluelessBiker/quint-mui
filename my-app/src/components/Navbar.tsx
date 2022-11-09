import React from 'react'
import SiteLinks from './SiteLinks'

const Navbar = () => {
    return (
        <div>
            <SiteLinks title="Home" urlpath=""/>
            <SiteLinks title="Chat" urlpath=""/>
            <SiteLinks title="Employees" urlpath=""/>
            <SiteLinks title="Settings" urlpath=""/>
        </div>
    )
}

export default Navbar