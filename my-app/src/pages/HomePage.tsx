import { Grid } from '@mui/material'
import TablesEmployees from '../modules/tables/components/TablesEmployees'
import TablesNewClients from '../modules/tables/components/TablesNewClients'

const HomePage = () => {
    return (
        <div>
            <Grid
                container
                spacing={2}
                sx={{
                    width: '90%',
                    margin: '0 auto',
                    padding: '0',
                }}
            >
                <Grid item xs={12} sm={6}>
                    <TablesEmployees />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TablesNewClients />
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage