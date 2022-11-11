import React from 'react'
import FormField from '../../common/components/FormField'
import ModalContainer from './ModalContainer'

const ModalAddEditEmployee = () => {
    return (
        <ModalContainer
            title="Add/Edit Employee"
            showhide='none'
        >
            <FormField label="full name"/>
            <FormField label="type"/>
        </ModalContainer>
    )
}

export default ModalAddEditEmployee