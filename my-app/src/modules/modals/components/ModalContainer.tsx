import { Container, Typography } from '@mui/material';
import { FC } from 'react';
import SiteButtons from '../../common/components/SiteButtons';

interface ModalContainerProps {
    title: string,
    bodytext?: string,
    bgcolor?: string,
    showhide: string,
}

const ModalContainer:FC<ModalContainerProps> = ({ title, bodytext, bgcolor, showhide }) => {
    return (
        <Container
            sx={{
                backgroundColor: `#${ bgcolor }`,
                borderRadius: '20px',
                border:'1px solid #333333',
            }}
        >
            <Typography variant="h6" gutterBottom>{ title }</Typography>
            <Typography variant="body2" gutterBottom sx={{display: { showhide }}}>{ bodytext }</Typography>

            <SiteButtons name="Cancel" path="/" bgcolor="FC9595"/>
            <SiteButtons name="Save" path="/" bgcolor="87DAC1"/>

        </Container>
    )
}

export default ModalContainer