import { Link } from '@mui/material'
import { FC } from 'react'

interface SiteLinksProps {
    title: string,
    urlpath?: string
}

const SiteLinks:FC<SiteLinksProps> = ({ title, urlpath }) => {
    return (
        <div>
            <Link
                href={ urlpath }
                underline="hover"
                color="inherit"
            >
                { title }
            </Link>
        </div>
    )
}

export default SiteLinks