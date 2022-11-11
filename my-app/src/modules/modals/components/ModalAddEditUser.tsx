import FormField from '../../common/components/FormField'
import ModalContainer from './ModalContainer'

const ModalAddEditUser = () => {
    return (
        <ModalContainer
            title="Add/Edit Employee"
            showhide='none'
        >
            <FormField label="email"/>
            <FormField label="fullname"/>
            <FormField label="password"/>
        </ModalContainer>
    )
}

export default ModalAddEditUser