import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FC, useState } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    border:'1px solid #333333',
    boxShadow: 24,
    p: 4,
};

interface ModalMUIProps {
    bgcolor?: string,
    btnname?: string,
    children?: React.ReactNode,
}

const ModalMUI:FC<ModalMUIProps> = ({ bgcolor, btnname, children }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button
            onClick={handleOpen}
            sx={{
                borderRadius: '10px',
                border:'1px solid #333333',
                width: '155px',
                color: '#000000',
                textTransform: 'none',
                backgroundColor: `#${ bgcolor }`,
            }}
        >
            { btnname }
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                { children }
            </Box>
        </Modal>
        </div>
    );
}

export default ModalMUI