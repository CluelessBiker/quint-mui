import { Button } from '@mui/material';
import React, { FC } from 'react';

interface SiteButtonsProps {
    name: string,
    path: string,
}

const SiteButtons:FC<SiteButtonsProps> = ({ name, path }) => {
    return (
        <Button variant="outlined">Outlined</Button>
    )
}

export default SiteButtons