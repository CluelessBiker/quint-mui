import { TextField } from '@mui/material';
import { FC } from 'react';

interface FormFieldProps {
    label: string,
}

const FormField:FC<FormFieldProps> = ({ label }) => {
    return (
        <TextField
            id="outlined-basic"
            label={ label }
            variant="outlined"
            sx={{
                width: '400px',
                margin: '0 0 30px 0',
            }}
        />
    )
}

export default FormField