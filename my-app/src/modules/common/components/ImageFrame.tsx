import { Container } from '@mui/material';
import { FC } from 'react';

interface ImageFrameProps {
    imageurl: string,
    height: string,
}

const ImageFrame:FC<ImageFrameProps> = ({ imageurl, height }) => {
    return (
        <Container
            sx={{
                backgroundImage:`url(${ imageurl })`,
                borderRadius: '20px',
                border:'1px solid #333333',
                height: { height },
            }}
        >   
        </Container>
    )
}

export default ImageFrame