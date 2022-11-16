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

    // const handleSaveClick = () => {
    //     const newProduct: Product = {
    //         id: 0,
    //         title:'',
    //         description:'',
    //         price:0,
    //         discountPercentage:0,
    //         rating:0,
    //         stock:0,
    //         brand:'',
    //         category:'',
    //         thumbnail:'',
    //     };
    //     setOpen(false)
    // }

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

    const [open, setOpen] = useState(false);

    const handleSaveClick = () => {
        appDispatch(addProduct(newProduct));
        setOpen(false)
    }

    const handleCancelClick = () => {
        setOpen(false)
    }

    return (
        <ModalMUI bgcolor="87DAC1" btnname="+ New Employee" open={open} setOpen={setOpen}>
            <Typography
                variant="h6"
                gutterBottom
                sx={{marginBottom: '20px'}}
            >
                Add Product
            </Typography>
            {/* <FormField label="title" value={title} onChange={(event)=>{setTitle(event.target.value)}}/> */}
            <FormField label="title" value={newProduct?.title} onChange={(event)=>{setNewProduct({...newProduct, title: event.target.value})}}/>
            <FormField label="description" value={newProduct?.description} onChange={(event)=>{setNewProduct({...newProduct, description: event.target.value})}}/>
            <FormField label="price" value={newProduct?.price} onChange={(event)=>{setNewProduct({...newProduct, price: event.target.value})}}/>
            <FormField label="discountPercentage" value={newProduct?.discountPercentage} onChange={(event)=>{setNewProduct({...newProduct, discountPercentage: event.target.value})}}/>
            <FormField label="rating" value={newProduct?.rating} onChange={(event)=>{setNewProduct({...newProduct, rating: event.target.value})}}/>
            <FormField label="stock" value={newProduct?.stock} onChange={(event)=>{setNewProduct({...newProduct, stock: event.target.value})}}/>
            <FormField label="brand" value={newProduct?.brand} onChange={(event)=>{setNewProduct({...newProduct, brand: event.target.value})}}/>
            <FormField label="category" value={newProduct?.category} onChange={(event)=>{setNewProduct({...newProduct, category: event.target.value})}}/>
            <FormField label="thumbnail" value={newProduct?.thumbnail} onChange={(event)=>{setNewProduct({...newProduct, thumbnail: event.target.value})}}/>

            <SiteButtons name="Cancel" clickfunct={handleCancelClick} bgcolor="FC9595"/>
            <SiteButtons name="Save" clickfunct={handleSaveClick} bgcolor="87DAC1"/>
        </ModalMUI>
    )
}

export default ModalAddProduct