import { Container, Grid, Typography } from '@mui/material'
import SiteButtons from '../modules/common/components/SiteButtons'
import TablesEmployees from '../modules/tables/components/TablesEmployees'

const EmployeesPage = () => {

    const styles = {
        Line: {
            height: '2px',
            background: '#333333',
            borderRadius: '2px',
        }
    }
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
                spacing={2}
                alignItems="center"
            >
                <Grid item xs={11}>
                    <div style={styles.Line}></div>
                </Grid>
                <Grid item xs={1}>
                    <SiteButtons path="/" name="+ New employee" bgcolor="87DAC1"/>
                </Grid>
            </Grid>

            <TablesEmployees />

        </Container>
    )
}

export default EmployeesPage