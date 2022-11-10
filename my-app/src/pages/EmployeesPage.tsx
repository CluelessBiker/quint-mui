import { Container, Grid } from '@mui/material'
import SiteButtons from '../modules/common/components/SiteButtons'

const EmployeesPage = () => {
    return (
        <Container
            sx={{
                width: '92%',
            }}
        >
            <h3>Home -> Employees</h3>
            <Grid>
                <div className={styles.line}></div>
                <SiteButtons path="/"/>
            </Grid>

        </Container>
    )
}

export default EmployeesPage