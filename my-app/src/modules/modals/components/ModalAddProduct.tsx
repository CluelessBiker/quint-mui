import { Typography } from '@mui/material'
import { useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { addProduct, Product } from '../../../redux/productsSlice'
import FormField from '../../common/components/FormField'
import SiteButtons from '../../common/components/SiteButtons'
import ModalMUI from './ModalMUI'

const ModalAddProduct = () => {
    const appDispatch = useAppDispatch()

    // const [title, setTitle] = useState<string>('');
    // const [description, setDescription] = useState<string>('');
    // const [discountPercentage, setDiscountPercentage] = useState<number>(0);
    // const [stock, setStock] = useState<number>(0);
    // const [brand, setBrand] = useState<string>('');
    // const [category, setCategory] = useState<string>('');
    // const [thumbnail, setThumbnail] = useState<string>(''); 
    // const [price, setPrice] = useState<number>(0); 
    // const [rating, setRating] = useState<number>(0); 

    const [newProduct, setNewProduct] = useState<Product>({
            id: 0,
            title:'',
            description:'',
            price:0,
            discountPercentage:0,
            rating:0,
            stock:0,
            brand:'',
            category:'',
            thumbnail:'',
    })

    // console.log(newProduct)


    const handleClick = () => {
        // const newProduct: Product = {
            // id: 0,
            // title:'',
            // description:'',
            // price:0,
            // discountPercentage:0,
            // rating:0,
            // stock:0,
            // brand:'',
            // category:'',
            // thumbnail:'',
        // };
        appDispatch(addProduct(newProduct))
    }

    return (
        <ModalMUI bgcolor="87DAC1" btnname="+ New Employee">
            <Typography
                variant="h6"
                gutterBottom
                sx={{marginBottom: '20px'}}
            >
                Add Product
            </Typography>
            <FormField label="title" value={newProduct?.title} onChange={(event)=>{setNewProduct({...newProduct, title: event.target.value})}}/>
            {/* <FormField label="title" value={title} onChange={(event)=>{setTitle(event.target.value)}}/> */}
            {/* <FormField label="description"/>
            <FormField label="price"/>
            <FormField label="discountPercentage"/>
            <FormField label="rating"/>
            <FormField label="stock"/>
            <FormField label="brand"/>
            <FormField label="category"/>
            <FormField label="thumbnail"/> */}

            <SiteButtons name="Cancel" bgcolor="FC9595"/>
            <SiteButtons name="Save" clickfunct={handleClick} bgcolor="87DAC1"/>
        </ModalMUI>
    )
}

export default ModalAddProduct