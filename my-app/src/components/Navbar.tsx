import { Grid } from '@mui/material'
import React from 'react'
import SiteLinks from './SiteLinks'

const Navbar = () => {
    const styles = {
        main: {
            border:"1px solid #333333",
            borderRadius: "20px",
            margin: "10px auto",
            width: "90%",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#FAFAFA",
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
            // spacing={2}
            direction="row"
            justifyContent="space-between"
            style={styles.main}
        >
                <Grid
                    item
                    xs={1}
                    style={styles.link}
                >
                    <SiteLinks title="Home" urlpath="/"/>
                </Grid>
                
                <Grid
                    item
                    xs={1}
                    style={styles.link}
                >
                    <SiteLinks title="Chat" urlpath="/chat"/>
                </Grid>

                <Grid
                    item
                    xs={1}
                    style={styles.link}
                >
                    <SiteLinks title="Employees" urlpath="/employees"/>
                </Grid>

                <Grid xs={8}></Grid>
            
                <Grid
                    item
                    xs={1}
                    style={styles.link}
                >
                    <SiteLinks title="Settings" urlpath="/settings"/>
                </Grid>
        </Grid>
    )
}

export default Navbar