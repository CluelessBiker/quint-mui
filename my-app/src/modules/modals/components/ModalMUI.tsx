// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FC, useState } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            { children }
            </Box>
        </Modal>
        </div>
    );
}

export default ModalMUI