import { Container } from '@mui/material';
import { FC } from 'react';

interface ImageFrameProps {
    imageurl: string,
    height: number,
}

const ImageFrame:FC<ImageFrameProps> = ({ imageurl, height }) => {
    return (
        <Container
            sx={{
                backgroundImage: { imageurl },
                borderRadius: '20px',
                border:'1px solid #333333',
                height: { height },
            }}
        >   
        </Container>
    )
}

export default ImageFrame