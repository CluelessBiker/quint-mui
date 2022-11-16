import { Container, Grid, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import HRLine from '../modules/common/components/HRLine'
import ModalAddProduct from '../modules/modals/components/ModalAddProduct'
import ProductsTable from '../modules/tables/components/ProductsTable'
// import { addProduct } from '../redux/productsSlice'

const EmployeesPage = () => {
    // const dispatch = useDispatch()

    return (
        <Container
            sx={{
                width: '100%',
                padding: '0',
                margin: '0 auto',
            }}
        >
            <Typography variant="h6" gutterBottom>Home -{'>'} Employees</Typography>
            <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    padding: '0',
                    margin: '50px auto',
                }}

            >
                <Grid item xs={10} sx={{ padding: '0 10px' }}>
                    <HRLine />
                </Grid>
                <Grid item xs={2}  sx={{ padding: '0 10px' }}>
                    <ModalAddProduct />
                </Grid>
            </Grid>

            <ProductsTable />

            {/* <button onClick={() => dispatch(addProduct(
                {
                    id: 200,
                    title: 'doll',
                    description: 'dammit doll',
                    price: 20,
                    discountPercentage: 5,
                    rating: 5,
                    stock: 6973,
                    brand: 'Dammit Dolls',
                    category: 'toys',
                    thumbnail: 'https://cdn.shopify.com/s/files/1/0264/2585/1957/products/PRES01_00_09cf03a8-2b1a-4d63-bfd8-3c674c2e3004_1024x1024@2x.jpg?v=1598284801',
                }
            ))}>add product</button> */}

        </Container>
    )
}

export default EmployeesPage