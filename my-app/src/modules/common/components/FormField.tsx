import { TextField } from '@mui/material';
import { FC } from 'react';

interface FormFieldProps {
    label: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

const FormField:FC<FormFieldProps> = ({ label, value, onChange }) => {
    return (
        <TextField
            id="outlined-basic"
            label={ label }
            variant="outlined"
            sx={{
                width: '400px',
                margin: '0 0 30px 0',
            }}
            value={value}
            onChange={onChange}
        />
    )
}

export default FormField