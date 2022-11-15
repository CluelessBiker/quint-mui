import { Container, Grid, Typography } from '@mui/material'
import HRLine from '../modules/common/components/HRLine'
import ModalAddProduct from '../modules/modals/components/ModalAddProduct'
import ProductsTable from '../modules/tables/components/ProductsTable'

const EmployeesPage = () => {

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

        </Container>
    )
}

export default EmployeesPage