import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Lottie from 'react-lottie'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import CallToAction from './ui/CallToAction'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import integrationAnimation from '../animations/integrationAnimation/data.json'
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagement from '../assets/increaseEngagement.svg'


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

export default function MobileApps(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: integrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <Grid container direction="column" >
                <Grid item container direction="row" 
                    justify={matchesMD ? "center" : undefined}
                    className={classes.rowContainer}
                    style={{marginTop: matchesXS ? "1em" : "2em"}}>
                    <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                    <IconButton style={{backgroundColor: "transparent"}} 
                        component={Link} to="/customsoftware"
                        onClick={() => props.setSelectedIndex(1)}>
                        <img src={backArrow} alt="Back to custome Software Page" />
                    </IconButton>
                    </Grid>
                    </Hidden>
                    <Grid item container direction="column" className={classes.heading}>
                        <Grid item>
                            <Typography align={matchesMD ? "center": undefined} variant="h2">
                                iOS/Andorid App Development
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
                        component={Link} to="/websites"
                        onClick={() => props.setSelectedIndex(3)}>
                            <img 
                                src={forwardArrow} 
                                alt="Forward to Website Develpment Page" 
                            />
                        </IconButton>
                    </Grid>
                    </Hidden>   
                </Grid>
                <Grid item container direction={matchesSM ? "column" : "row"} 
                style={{marginTop: "15em", marginBottom: "15em"}}
                className={classes.rowContainer} >
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
                                Intergration
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                                It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. 
                                Can connection instrument astonished unaffected his motionless preference.
                            </Typography>
                            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                                Announcing say boy precaution unaffected difficulty alteration him. 
                                Above be would at so going heard. 
                                Now whatever surprise resolved elegance indulged own way outlived. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                    <Lottie options={defaultOptions} style={{maxWidth: "20em"}} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography align={matchesSM ? "center" : "right"} variant="h4" gutterBottom>
                                Simultaneous Platform Support
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                                It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. 
                                Can connection instrument astonished unaffected his motionless preference.
                            </Typography>
                            <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                                Announcing say boy precaution unaffected difficulty alteration him. 
                                Above be would at so going heard. 
                                Now whatever surprise resolved elegance indulged own way outlived. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"} 
                style={{marginBottom: "15em"}}
                className={classes.rowContainer}>
                    <Grid item container direction="column" alignItems="center" md>
                        <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Functionality
                        </Typography>
                        </Grid>
                        <Grid item>
                            <img src={swiss} alt="Swiss army knife" />
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" alignItems="center" md
                    style={{marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0}}>
                        <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Access
                        </Typography>
                        </Grid>
                        <Grid item>
                            <img src={access} alt="Extend Access" style={{maxWidth: matchesXS ? "20em" : "28em"}}/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" alignItems="center" md>
                        <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Increase Engagement
                        </Typography>
                        </Grid>
                        <Grid item>
                            <img src={engagement} alt="Increase Engagement" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <CallToAction setValue={props.setValue} />
                </Grid>
            </Grid>
    )
}