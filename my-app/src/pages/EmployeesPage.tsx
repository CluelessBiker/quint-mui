import { Container, Grid, Typography } from '@mui/material'
import HRLine from '../modules/common/components/HRLine'
import SiteButtons from '../modules/common/components/SiteButtons'
import ProductsTable from '../modules/tables/components/ProductsTable'
// import TablesEmployees from '../modules/tables/components/TablesEmployees'

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
                    <SiteButtons path="/" name="+ New employee" bgcolor="87DAC1"/>
                </Grid>
            </Grid>

            {/* <TablesEmployees /> */}
            <ProductsTable />

        </Container>
    )
}

export default EmployeesPage