import { Container } from '@mui/system'
import { FC } from 'react'

interface BoxesProps {
    bgcolor: string,
}

const Boxes:FC<BoxesProps> = ({ bgcolor }) => {
    return (
        <Container 
            sx={{
                backgroundColor: { bgcolor },
                borderRadius: '20px',
                border:'1px solid #333333',
                height: '100px',
            }}>

        </Container>
    )
}

export default Boxes