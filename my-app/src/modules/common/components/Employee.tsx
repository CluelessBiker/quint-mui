import { Avatar } from '@mui/material';
import { FC } from 'react';

interface EmployeeProps {
    profileimage: {
        imageurl: string,
        alttext: string,
    },
    firstname: string,
    lastname: string,
    location: string,
    age: number,
}

const Employee:FC<EmployeeProps> = ({ profileimage, firstname, lastname, location, age }) => {
    return (
        <div>
            <Avatar alt={ profileimage.alttext } src={ profileimage.imageurl} />
            <p>{ firstname }</p>
            <p>{ lastname }</p>
            <p>{ location }</p>
            <p>{ age }</p>
        </div>
    )
}

export default Employee