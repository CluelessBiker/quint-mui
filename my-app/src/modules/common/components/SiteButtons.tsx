import { Button, Link } from '@mui/material';
import React, { FC } from 'react';


interface SiteButtonsProps {
    name: string,
    path: string,
}

const SiteButtons:FC<SiteButtonsProps> = ({ name, path }) => {
    return (
        <Link
            href={ path }
            underline="none"
            color="inherit"
        >
            <Button
                variant="outlined"
                sx={{
                    borderRadius: '5px',
                    border:'1px solid #333333',
                    width: '150px',
                    color: '#000000',
                }}
            >
                { name }
            </Button>
        </Link>
    )
}

export default SiteButtons