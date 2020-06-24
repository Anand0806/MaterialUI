import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Lottie from 'react-lottie'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import documentsAnimations from '../animations/documentsAnimation/data'
import scaleAnimation from '../animations/scaleAnimation/data.json'
import roots from '../assets/root.svg'
import automationAnimation from '../animations/automationAnimation/data.json'
import uxAnimation from '../animations/uxAnimation/data'
import CallToAction from './ui/CallToAction'

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
    }, 
    itemContainer: {
        maxWidth: "40em"
    }
}))

export default function CustomSoftware(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const documentOptions = {
        loop: true,
        autoplay: true, 
        animationData: documentsAnimations,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const scaleOptions = {
        loop: true,
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const automationOptions = {
        loop: true,
        autoplay: true, 
        animationData: automationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const uxOptions = {
        loop: true,
        autoplay: true, 
        animationData: uxAnimation,
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
                        component={Link} to="/services"
                        onClick={() => props.setSelectedIndex(0)}>
                        <img src={backArrow} alt="Back to Services Page" />
                    </IconButton>
                </Grid>
                </Hidden>
                
                    <Grid item container direction="column" className={classes.heading}>
                        <Grid item>
                            <Typography align={matchesMD ? "center": undefined} variant="h2">Custom Software Development</Typography>
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
                                Rank tall boy man them over post now. 
                                Off into she bed long fat room. Recommend existence curiosity perfectly favourite get eat she why daughters. Not may too nay busy last song must sell. 
                                An newspaper assurance discourse ye certainly. Soon gone game and why many calm have. 
                            </Typography>
                            <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                                Saw yet kindness too replying whatever marianne. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} 
                        component={Link} to="/mobileapps"
                        onClick={() => props.setSelectedIndex(2)}>
                            <img 
                                src={forwardArrow} 
                                alt="Forward to iOS/Android App Development Page" 
                            />
                        </IconButton>
                    </Grid>
                    </Hidden>   
                </Grid>
                <Grid item container direction="row" 
                    justify="center" 
                    style={{marginTop: "15em", marginBottom: "20em"}}
                    className={classes.rowContainer}>
                    <Grid item container direction="column" md alignItems="center" style={{maxWidth: "40em"}}>
                        <Grid item>
                            <Typography variant="h4">Save Energy</Typography>
                        </Grid>
                        <Grid item>
                            <img src={lightbulb} alt="lightbulb"/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md alignItems="center" 
                        style={{maxWidth: "40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0 }}>
                        <Grid item>
                            <Typography variant="h4">Save Time</Typography>
                        </Grid>
                        <Grid item>
                            <img src={stopwatch} alt="stopwatch"/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md alignItems="center" style={{maxWidth: "40em"}}>
                        <Grid item>
                            <Typography variant="h4">Save Money</Typography>
                        </Grid>
                        <Grid item>
                            <img src={cash} alt="cash"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container 
                    alignItems={matchesMD ? "center" : undefined} 
                    direction={matchesMD ? "column" : "row"} justify="space-between" 
                    className={classes.rowContainer}>
                    <Grid item container className={classes.itemContainer} 
                        style={{marginBottom: matchesMD ? "15em" : 0}}
                        direction={matchesSM ? "column" : "row"} md>
                        <Grid item container direction="column" md>
                            <Grid item>
                                <Typography variant="h4" align={matchesSM ? "center": undefined}>
                                    Digital Documents & Data
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" align={matchesSM ? "center": undefined} paragraph>
                                    Meant balls it if up doubt small purse. 
                                </Typography>
                                <Typography variant="body1" align={matchesSM ? "center": undefined} paragraph> 
                                    Required his you put the outlived answered position. An pleasure exertion if believed provided to. 
                                    All led out world these music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceive marianne in. 
                                    In am think on style child of. Servants moreover in sensible he it ye possible. 
                                </Typography>
                                <Typography variant="body1" align={matchesSM ? "center": undefined} paragraph> 
                                    All led out world these music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceive marianne in. 
                                    In am think on style child of. Servants moreover in sensible he it ye possible. 
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item md>
                            <Lottie options={documentOptions} isStopped 
                            style={{maxHeight: 275, maxWidth: 275, minHeight: 250}} />
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.itemContainer}
                        direction={matchesSM ? "column" : "row"} md >
                        <Grid item md>
                            <Lottie options={scaleOptions}
                            style={{maxHeight: 260, maxWidth: 280}} />
                        </Grid>
                        <Grid item container direction="column" md>
                            <Grid item>
                                <Typography variant="h4" align={matchesSM ? "center": "right"}>
                                    Scale
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography variant="body1" align={matchesSM ? "center": "right"} paragraph>
                                    Meant balls it if up doubt small purse. 
                                    Required his you put the outlived answered position. An pleasure exertion if believed provided to. 
                                    All led out world these music while asked.
                                </Typography>
                            </Grid>
                        </Grid>    
                    </Grid>
                </Grid>
                <Grid item container direction="row" 
                    style={{marginTop: "20em", marginBottom: "20em"}}
                    className={classes.rowContainer}>
                    <Grid item container direction="column" alignItems="center">
                        <Grid item>
                            <img src={roots} alt="tree with roots extending out" 
                            height={matchesSM ? "300em" : "450em"} width={matchesSM ? "300em" : "450em"} />
                        </Grid>
                        <Grid item className={classes.itemContainer}>
                            <Typography variant="h4" gutterBottom align="center">
                                Root-Cause Analysis
                            </Typography>
                            <Typography variant="body1" paragraph align="center">
                                By impossible of in difficulty discovered celebrated ye. 
                                Justice joy manners boy met resolve produce. 
                            </Typography>
                            <Typography variant="body1" paragraph align="center">
                                Bed head loud next plan rent had easy add him. 
                                As earnestly shameless elsewhere defective estimable fulfilled of. Esteem my advice it an excuse enable.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container alignItems={matchesMD ? "center" : undefined} 
                direction={matchesMD ? "column" : "row"} justify="space-between"
                style={{marginBottom: "20em"}} className={classes.rowContainer}>
                    <Grid item container className={classes.itemContainer} 
                    direction={matchesSM ? "column" : "row"} 
                    style={{marginBottom: matchesMD ? "15em" : 0}} md>
                        <Grid item container direction="column" md>
                            <Grid item>
                                <Typography variant="h4" align={matchesSM ? "center": undefined}>
                                    Automation
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" paragraph align={matchesSM ? "center": undefined}>
                                    Why waste your time. 
                                </Typography>
                                <Typography variant="body1" paragraph align={matchesSM ? "center": undefined}> 
                                    Required his you put the outlived answered position. An pleasure exertion if believed provided to. 
                                    All led out world these music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceive marianne in. 
                                    In am think on style child of. Servants moreover in sensible he it ye possible. 
                                </Typography>
                                <Typography variant="body1" paragraph align={matchesSM ? "center": undefined}> 
                                    All led out world these music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceive marianne in. 
                                    In am think on style child of. Servants moreover in sensible he it ye possible. 
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item md>
                            <Lottie options={automationOptions} isStopped 
                            style={{maxHeight: 290, maxWidth: 280}} />
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.itemContainer} 
                    direction={matchesSM ? "column" : "row"} md>
                        <Grid item md>
                            <Lottie options={uxOptions}
                            style={{maxHeight: 310, maxWidth: 155}} />
                        </Grid>
                        <Grid item container direction="column" md>
                            <Grid item>
                                <Typography variant="h4" align={matchesSM ? "center": "right"}>
                                    User Experience Design
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography variant="body1" align={matchesSM ? "center": "right"} paragraph>
                                    Meant balls it if up doubt small purse. 
                                </Typography>
                                <Typography variant="body1" align={matchesSM ? "center": "right"} paragraph>
                                   An pleasure exertion if believed provided to. 
                                    All led out world these music while asked.
                                </Typography>
                                <Typography variant="body1" align={matchesSM ? "center": "right"} paragraph>
                                    All led out world these music while asked.
                                </Typography>
                            </Grid>
                        </Grid>    
                    </Grid>
                </Grid>
                <Grid item>
                    <CallToAction setValue={props.setValue} />
                </Grid>
            </Grid>
    )
}