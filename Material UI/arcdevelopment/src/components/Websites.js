import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import CallToAction from './ui/CallToAction'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    }
}))

export default function Websites(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container direction="column" >
            <Grid item container direction="row" 
                justify={matchesMD ? "center" : undefined}
                className={classes.rowContainer}
                style={{marginTop: matchesXS ? "1em" : "2em"}}>
                <Hidden mdDown>
                <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                    <IconButton style={{backgroundColor: "transparent"}} 
                        component={Link} to="/mobileapps"
                        onClick={() => props.setSelectedIndex(2)}>
                        <img src={backArrow} alt="Back to Mobile Development page" />
                    </IconButton>
                </Grid>
                </Hidden>
                    <Grid item container direction="column" className={classes.heading}>
                        <Grid item>
                            <Typography align={matchesMD ? "center": undefined} variant="h2">
                                Website Development
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                                Whether we're replacing old software or inventing new solutions,
                                Arc Development is here to help your business tackle technology
                            </Typography>
                            <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                                It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. 
                                Can connection instrument astonished unaffected his motionless preference. Announcing say boy precaution unaffected difficulty alteration him. Above be would at so going heard. Engaged at village at am equally proceed. Settle nay length almost ham direct extent. Agreement for listening remainder get attention law acuteness day.
                                Now whatever surprise resolved elegance indulged own way outlived. 
                            </Typography>
                            <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                                Saw yet kindness too replying whatever marianne. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} 
                        component={Link} to="/services"
                        onClick={() => props.setSelectedIndex(0)}>
                            <img 
                                src={forwardArrow} 
                                alt="Forward to Services Page" 
                            />
                        </IconButton>
                    </Grid>
                    </Hidden>   
                </Grid>
                <Grid item container direction={matchesSM ? "column" : "row"} className={classes.rowContainer} 
                alignItems="center"
                style={{marginTop: "15em"}}>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="h4" gutterBottom>
                                    Analytics
                                </Typography>
                            </Grid>
                            <Grid item style={{marginLeft: "-2.75em"}}>
                                <img src={analytics} alt="Analytics gragh" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{maxWidth: "30em"}}>
                       <Typography variant="body1" align={matchesSM ? "center" : undefined} >
                            It allowance prevailed enjoyment in it. 
                            Calling observe for who pressed raising his. 
                            Can connection instrument astonished unaffected his motionless preference.
                        </Typography> 
                    </Grid>
                </Grid>
                <Grid item container direction={matchesSM ? "column" : "row"} className={classes.rowContainer} 
                    alignItems="center"
                    justify="flex-end"
                    style={{marginTop: "15em", marginBottom: "15em"}}>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography align="center" variant="h4" gutterBottom>
                                    E-Commerce
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src={ecommerce} alt="Swiss army knife" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "1em", maxWidth: "30em"}}>
                       <Typography variant="body1" align={matchesSM ? "center" : undefined}  paragraph>
                            It allowance prevailed enjoyment in it. 
                        </Typography>
                        <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                            Calling observe for who pressed raising his. 
                            Can connection instrument astonished unaffected his motionless preference.
                        </Typography> 
                    </Grid>
                </Grid>
                <Grid item container direction={matchesSM ? "column" : "row"} 
                    className={classes.rowContainer} 
                    alignItems="center" >
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item align={matchesSM ? "center" : undefined} >
                                <Typography variant="h4" gutterBottom>
                                    OutReach
                                </Typography>
                            </Grid>
                            <Grid item style={{marginLeft: "-2.75em"}}>
                                <img src={outreach} alt="Swiss army knife" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}}>
                       <Typography variant="body1" align={matchesSM ? "center" : undefined} style={{maxWidth: "30em"}}>
                            It allowance prevailed enjoyment in it. 
                            Calling observe for who pressed raising his. 
                            Can connection instrument astonished unaffected his motionless preference.
                        </Typography> 
                    </Grid>
                </Grid>
                <Grid item container direction={matchesSM ? "column" : "row"} className={classes.rowContainer} 
                    alignItems="center"
                    justify="flex-end"
                    style={{marginTop: "15em", marginBottom: "15em"}}>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography align="center" variant="h4" gutterBottom>
                                    Search Engine <br /> Optimization
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src={seo} alt="Swiss army knife" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "1em", maxWidth: "30em"}}>
                       <Typography variant="body1"  align={matchesSM ? "center" : undefined} paragraph>
                            It allowance prevailed enjoyment in it. 
                        </Typography>
                        <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                            Calling observe for who pressed raising his. 
                            Can connection instrument astonished unaffected his motionless preference.
                        </Typography>
                        <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                            Calling observe for who pressed raising his. 
                            Can connection instrument astonished unaffected his motionless preference.
                        </Typography> 
                    </Grid>
                </Grid>
                <Grid item>
                    <CallToAction setValue={props.setValue} />
                </Grid>
        </Grid>
    )
}