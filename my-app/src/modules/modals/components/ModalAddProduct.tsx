import { Typography } from '@mui/material'
import FormField from '../../common/components/FormField'
import SiteButtons from '../../common/components/SiteButtons'
import ModalMUI from './ModalMUI'

const ModalAddProduct = () => {
    return (
        <ModalMUI bgcolor="87DAC1" btnname="+ New Employee">
            <Typography
                variant="h6"
                gutterBottom
                sx={{marginBottom: '20px'}}
            >
                Add Product
            </Typography>

            <FormField label="title"/>
            <FormField label="description"/>
            <FormField label="price"/>
            <FormField label="discountPercentage"/>
            <FormField label="rating"/>
            <FormField label="stock"/>
            <FormField label="brand"/>
            <FormField label="category"/>
            <FormField label="thumbnail"/>

            <SiteButtons name="Cancel" path="/" bgcolor="FC9595"/>
            <SiteButtons name="Save" path="/" bgcolor="87DAC1"/>
        </ModalMUI>
    )
}

export default ModalAddProduct