import { Container, Grid, Typography } from '@mui/material'
import FormField from '../modules/common/components/FormField'
import HRLine from '../modules/common/components/HRLine'
import ImageFrame from '../modules/common/components/ImageFrame'
import SiteButtons from '../modules/common/components/SiteButtons'

const SettingsPage = () => {
    return (
        <Container
            sx={{
                width: '100%',
                padding: '0',
                margin: '0 auto',
            }}
        >
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
                <Grid item>
                    <Typography variant="h6" gutterBottom>Settings</Typography>
                </Grid>
                <Grid item md={9}>
                    <HRLine />
                </Grid>
                <Grid item>
                    <SiteButtons name="+ New user" path="/" bgcolor="87DAC1"/>
                </Grid>

            </Grid>

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
                <Grid item>
                    <Typography variant="h6" gutterBottom>User details</Typography>
                </Grid>
                <Grid item md={10}>
                    <HRLine />
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="baseline"
            >
                <Grid item>
                <ImageFrame
                    height='200px'
                    width='200px'
                    imageurl="https://www.pluggedin.com/wp-content/uploads/2019/12/the-hickerhikers-guide-to-the-galaxy-1200x711.jpg"
                />
                </Grid>
                <Grid item container direction="column">
                    <Typography variant="body2" gutterBottom>Email: user@mail.com</Typography>
                    <Typography variant="body2" gutterBottom>Full name: Dave Lister</Typography>
                </Grid>
            </Grid>

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
                <Grid item>
                    <Typography variant="h6" gutterBottom>Change user details</Typography>
                </Grid>
                <Grid item md={10}>
                    <HRLine />
                </Grid>

            </Grid>

            <Grid container direction="column">
                <FormField label="Full name"/>
                <SiteButtons name="Save changes" path="/" bgcolor="87DAC1"/>
            </Grid>

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
                <Grid item>
                    <Typography variant="h6" gutterBottom>Change password</Typography>
                </Grid>
                <Grid item md={10}>
                    <HRLine />
                </Grid>
            </Grid>

            <Grid container direction="column">
                <FormField label="Current password"/>
                <FormField label="New Password"/>
                <FormField label="Re-type password"/>
                <SiteButtons name="Change password" path="/" bgcolor="87DAC1"/>
            </Grid>
        </Container>
    )
}

export default SettingsPage