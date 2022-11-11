import { Container, Grid, Typography } from '@mui/material'
import Boxes from '../modules/common/components/Boxes'
import ImageFrame from '../modules/common/components/ImageFrame'
import SiteButtons from '../modules/common/components/SiteButtons'
import TablesActiveEmployees from '../modules/tables/components/TablesActiveEmployees'
import TablesNewClients from '../modules/tables/components/TablesNewClients'

const HomePage = () => {
    return (
        <div>
            <Grid
                container
                spacing={0}
                sx={{
                    width: '92%',
                    margin: '0 auto',
                    padding: '0',
                }}
            >
                <Grid item xs={6} sm={3}>
                    <Boxes bgcolor='C586E9'/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Boxes bgcolor='6B5AA2'/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Boxes bgcolor='D2CEF9'/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Boxes bgcolor='4C7FAC'/>
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
                    <TablesActiveEmployees />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TablesNewClients />
                </Grid>
            </Grid>

            <Container
                sx={{
                    width: '92%',
                    margin: '0 auto',
                    padding: '0',
                }}
            >
                <Typography variant="h6" gutterBottom>Quick Actions</Typography>
                <Grid
                    container
                    // spacing={2}
                    justifyContent="space-between"
                    sx={{
                        padding: '0',
                    }}
                >
                    <Grid item xs={6} sm={3} sx={{margin: '0 0 10px 0'}}>
                        <SiteButtons path="/" name="Add Client"/>
                    </Grid>
                    <Grid item xs={6} sm={3} sx={{margin: '0 0 10px 0'}}>
                        <SiteButtons path="/" name="Add Employee"/>
                    </Grid>
                    <Grid item xs={6} sm={3} sx={{margin: '0 0 10px 0'}}>
                        <SiteButtons path="/" name="Undefined"/>
                    </Grid>
                    <Grid item xs={6} sm={3} sx={{margin: '0 0 10px 0'}}>
                        <SiteButtons path="/" name="Undefined"/>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <ImageFrame
                    imageurl="https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1559487728470-0G8BS34R5VXN2U91MKKD/honeycomb+wall+paint+accent"
                    height="200px"
                />
            </Container>
        </div>
    )
}

export default HomePage