import { Button, Link } from '@mui/material';
import { FC } from 'react';


interface SiteButtonsProps {
    name: string,
    path?: string,
    bgcolor?: string,
    clickfunct?: () => void,
}

const SiteButtons:FC<SiteButtonsProps> = ({ name, path, bgcolor, clickfunct }) => {
    return (
        <Link
            href={ path }
            underline="none"
            color="inherit"
        >
            <Button
                variant="outlined"
                onClick={clickfunct}
                sx={{
                    borderRadius: '10px',
                    border:'1px solid #333333',
                    width: '155px',
                    color: '#000000',
                    textTransform: 'none',
                    backgroundColor: `#${ bgcolor }`,
                }}
            >
                { name }
            </Button>
        </Link>
    )
}

export default SiteButtons