import { Container } from '@mui/material';
import { FC } from 'react';

interface ImageFrameProps {
    imageurl: string,
    height: string,
    width?: string,
}

const ImageFrame:FC<ImageFrameProps> = ({ imageurl, height, width }) => {
    return (
        <Container
            sx={{
                backgroundImage:`url(${ imageurl })`,
                backgroundSize: 'cover',
                borderRadius: '20px',
                border:'1px solid #333333',
                height: { height },
                width: { width },
                marginBottom: '20px',
            }}
        >   
        </Container>
    )
}

export default ImageFrame