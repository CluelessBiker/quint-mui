import { Grid } from '@mui/material'
import Boxes from '../modules/common/components/Boxes'
import SiteButtons from '../modules/common/components/SiteButtons'
import TablesEmployees from '../modules/tables/components/TablesEmployees'
import TablesNewClients from '../modules/tables/components/TablesNewClients'

const HomePage = () => {
    return (
        <div>
            <Grid
                container
                spacing={2}
                sx={{
                    width: '92%',
                    margin: '0 auto',
                    padding: '0',
                }}
            >
                <Grid item xs={6} sm={3}>
                    <Boxes bgcolor='#C586E9'/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Boxes bgcolor='#6B5AA2'/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Boxes bgcolor='#D2CEF9'/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Boxes bgcolor='#4C7FAC'/>
                </Grid>
            </Grid>

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

            <Grid
                container
                spacing={2}
                sx={{
                    width: '92%',
                    margin: '0 auto',
                    padding: '0',
                }}
            >
                <Grid item xs={6} sm={3}>
                    <SiteButtons path="/" name="Add Client"/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <SiteButtons path="/" name="Add Employee"/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <SiteButtons path="/" name="Undefined"/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <SiteButtons path="/" name="Undefined"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage