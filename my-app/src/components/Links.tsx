import React, { FC } from 'react'

interface LinksProps {
    title: string,
    urlpath: string
}

const Links:FC<LinksProps> = ({ title, urlpath }) => {
    return (
        <a href={ urlpath }>{ title }</a>
    )
}

export default Links