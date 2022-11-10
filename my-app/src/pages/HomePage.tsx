import { Grid } from '@mui/material'
import TablesEmployees from '../modules/tables/components/TablesEmployees'
import TablesNewClients from '../modules/tables/components/TablesNewClients'

const HomePage = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TablesEmployees />
                </Grid>
                <Grid item xs={6}>
                    <TablesNewClients />
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage