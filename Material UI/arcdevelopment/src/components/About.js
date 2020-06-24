import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Hidden from '@material-ui/core/Hidden'
import CallToAction from './ui/CallToAction'

import history from '../assets/history.svg'
import profile from '../assets/founderAnand.jpg'
import yearbook from '../assets/yearbook.svg'
import puppy from '../assets/puppy.svg'

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    avatar: {
        height: "25em",
        width: "20em",
        [theme.breakpoints.down("sm")]: {
            height: "20em",
            width: "20em",
            maxHeight: 350,
            maxWidth: 300
        }
    }
}))

export default function About (props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

    return(
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: matchesMD ? "1em" : "2em"}}>
                <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                    About Us
                </Typography>
            </Grid>
            <Grid item container justify="center" className={classes.rowContainer} style={{marginTop: "3em"}}>
                <Typography variant="h4" align="center" className={classes.missionStatement}>
                    The main purpose of your About Us page is to give your visitors a glimpse into who you are as a person or a business
                    This often requires finding the right balance between compelling content and a design carefully planned to look the part.
                </Typography>
            </Grid>
            <Grid item>
                <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center": undefined}
                    className={classes.rowContainer} justify="space-around" style={{marginTop: "10em", marginBottom: "10em"}}>
                <Grid item container direction="column" lg style={{maxWidth: "35em"}}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
                            History
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}  
                            paragraph style={{fontWeight: 700, fontStyle: "italic"}}>
                            We're the new kid on the block
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}  paragraph>
                            This page has a unique feel, thanks to the deconstructed action figures representing the founders, 
                            Leigh Whipday and Jonny Lander.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}  paragraph>
                            The great attention to detail and interactivity also reflect the company’s 16 years of experience.
                            No number of words could hope to tell one of their potential clients nearly as much as these pictures can.
                            The magical visuals and overall simple look and feel makes this About Us page one of our top picks.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}  paragraph>
                            To sum up, this page stands out by providing the perfect mix of fun and information.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid item container justify="center" lg >
                    <img src={history} alt="quill pen sitting on the top" style={{maxHeight: matchesMD ? 200 : "22em"}}/>
                </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" alignItems="center" className={classes.rowContainer} 
                style={{marginBottom: "15em"}}>
                <Grid item>
                    <Typography align="center" variant="h4" gutterBottom>
                        Team
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Anand Rao, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I want to become a Front End developer
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={profile} className={classes.avatar} />
                </Grid>
                <Grid item container justify={matchesMD ? "center" : undefined}>
                    <Hidden lgUp>
                        <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
                            <Typography variant="body1" align="center" paragraph>
                                Building a website is, in many ways, an exercise of willpower.
                                It’s tempting to get distracted by the bells and whistles of the design process, and 
                                forget all about creating compelling content.
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                It's that compelling content that's crucial to making inbound marketing work for your business.
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" lg 
                        alignItems={matchesMD ? "center" : undefined}
                        style={{marginBottom: matchesMD ? "2.5em" : 0}}>
                        <Grid item>
                            <img src={yearbook} alt="yearbook page about founder" 
                            style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">a page from my yearbook</Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
                            <Typography variant="body1" align="center" paragraph>
                                Building a website is, in many ways, an exercise of willpower.
                                It’s tempting to get distracted by the bells and whistles of the design process, and 
                                forget all about creating compelling content.
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                It's that compelling content that's crucial to making inbound marketing work for your business.
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" lg alignItems={matchesMD ? "center" : "flex-end"}>
                        <Grid item>
                            <img src={puppy} alt="my puppy" style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                Bubblu, my puppy
                            </Typography>
                        </Grid>
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