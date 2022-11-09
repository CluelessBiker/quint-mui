import { Grid } from '@mui/material'
import React from 'react'
import SiteLinks from './SiteLinks'

const Navbar = () => {
    const styles = {
        main: {
            border:"1px solid #D3D3D3",
            borderRadius: "20px",
            margin: "20px",
            width: "100%",
            alignItems: "center",
            padding: "20px",
            // boxSizing: "border-box",
        },
        link: {
            padding: "0",
        },
    };

    return (
        <Grid
            container
            xs={12}
            spacing={2}
            direction="row"
            justifyContent="space-between"
            style={styles.main}
        >
            <Grid
                item
                xs={3}
                style={styles.link}
            >
                <SiteLinks title="Home" urlpath="/"/>
            </Grid>
            
            <Grid
                item
                xs={3}
                style={styles.link}
            >
                <SiteLinks title="Chat" urlpath="/chat"/>
            </Grid>
            <Grid
                item
                xs={3}
                style={styles.link}
            >
                <SiteLinks title="Employees" urlpath="/employees"/>
            </Grid>
            <Grid
                item
                xs={3}
                style={styles.link}
            >
                <SiteLinks title="Settings" urlpath="/settings"/>
            </Grid>
        </Grid>
    )
}

export default Navbar