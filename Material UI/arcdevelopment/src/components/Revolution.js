import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Lottie from 'react-lottie'

import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'

import technologyAnimation from '../animations/technologyAnimation/data.json'

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    }
}))

export default function Revolution(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: technologyAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} >
                <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{fontFamily: "Pacifico"}}>
                    The Revolution
                </Typography>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} 
                className={classes.rowContainer} 
                style={{marginTop: "5em"}} alignItems="center">
                <Grid item lg>
                    <img src={vision} 
                    alt="mountain through binoculars" 
                    style={{
                        maxWidth: matchesMD ? 300 : "40em", 
                        marginRight: matchesMD ? 0 : "5em", 
                        marginBottom: matchesMD? "5em" : 0}} />
                </Grid>
                <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
                            Vision
                        </Typography>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1">
                            In the first place we have granted to God, 
                            and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, 
                            and shall have her rights entire, and her liberties inviolate;
                        </Typography>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1">
                            In the first place we have granted to God, 
                            and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, 
                            and shall have her rights entire, and her liberties inviolate;
                        </Typography>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1">
                            In the first place we have granted to God, 
                            and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, 
                            and shall have her rights entire, and her liberties inviolate;
                        </Typography>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1">
                            In the first place we have granted to God, 
                            and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, 
                            and shall have her rights entire, and her liberties inviolate;
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} 
                className={classes.rowContainer} 
                style={{marginTop: "5em", marginBottom: "10em"}} alignItems="center">
                
                <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
                            Technology
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1">
                            In the first place we have granted to God, 
                            and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, 
                            and shall have her rights entire, and her liberties inviolate;
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1">
                            In the first place we have granted to God, 
                            and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, 
                            and shall have her rights entire, and her liberties inviolate;
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1">
                            In the first place we have granted to God, 
                            and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, 
                            and shall have her rights entire, and her liberties inviolate;
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1">
                            In the first place we have granted to God, 
                            and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, 
                            and shall have her rights entire, and her liberties inviolate;
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
                    <Lottie options={defaultOptions} style={{maxWidth: "40em", margin: 0}}/>
                </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.rowContainer} justify="center">
                <Grid item>
                    <Typography variant="h4" gutterBottom>
                        Process
                    </Typography>
                </Grid>
            </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#B3B3B3"}}>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} 
                                variant="h4" gutterBottom 
                                style={{color: "#000", marginTop: "5em"}}>
                                Consultation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} 
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Greatly hearted has who believe. 
                                Drift allow green son walls years for blush. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Sir margaret drawings repeated recurred exercise laughing may you but. 
                                Do repeated whatever to welcomed absolute no. 
                                Fat surprise although outlived and informed shy dissuade property. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                            style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Musical by me through he drawing savings an. No we stand avoid decay heard mr. 
                                Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg style={{alignSelf: "center"}}>
                        <img src={consultation} alt="consultation img" width="100%" style={{maxWidth: 700}}/>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} 
                        style={{backgroundColor: "#FF7373"}}>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} 
                                variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>
                                Mock Up
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Greatly hearted has who believe. 
                                Drift allow green son walls years for blush. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Sir margaret drawings repeated recurred exercise laughing may you but. 
                                Do repeated whatever to welcomed absolute no. 
                                Fat surprise although outlived and informed shy dissuade property. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Musical by me through he drawing savings an. No we stand avoid decay heard mr. 
                                Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg style={{alignSelf: "center"}} >
                        <img src={mockup} alt="random-mockup img" style={{maxWidth: 1000}} width="100%" />
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#39B54A"}}>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>
                                Review
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Greatly hearted has who believe. 
                                Drift allow green son walls years for blush. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Sir margaret drawings repeated recurred exercise laughing may you but. 
                                Do repeated whatever to welcomed absolute no. 
                                Fat surprise although outlived and informed shy dissuade property. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Musical by me through he drawing savings an. No we stand avoid decay heard mr. 
                                Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. 
                            </Typography>
                        </Grid>
                    </Grid> 
                    <Grid item lg style={{alignSelf: "center"}}>
                        <img src={review} alt="review img" width="100%"/>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#A67C52"}}>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>
                                Design
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Greatly hearted has who believe. 
                                Drift allow green son walls years for blush. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Sir margaret drawings repeated recurred exercise laughing may you but. 
                                Do repeated whatever to welcomed absolute no. 
                                Fat surprise although outlived and informed shy dissuade property. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Musical by me through he drawing savings an. No we stand avoid decay heard mr. 
                                Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg style={{alignSelf: "center"}}>
                        <img src={design} alt="design img" style={{maxWidth: 1000}} width="100%"/>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#39B54A"}}>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                             variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>
                                Review
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Greatly hearted has who believe. 
                                Drift allow green son walls years for blush. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Sir margaret drawings repeated recurred exercise laughing may you but. 
                                Do repeated whatever to welcomed absolute no. 
                                Fat surprise although outlived and informed shy dissuade property. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Musical by me through he drawing savings an. No we stand avoid decay heard mr. 
                                Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg style={{alignSelf: "center"}}>
                        <img src={review} alt="review img" width="100%"/>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#FBB03B"}}>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>
                                Build
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                            Greatly hearted has who believe. 
                            Drift allow green son walls years for blush. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Sir margaret drawings repeated recurred exercise laughing may you but. 
                                Do repeated whatever to welcomed absolute no. 
                                Fat surprise although outlived and informed shy dissuade property. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Musical by me through he drawing savings an. No we stand avoid decay heard mr. 
                                Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg style={{alignSelf: "center"}}>
                        <img src={build} alt="build img" style={{maxWidth: matchesMD ? 700 :1000}} width="100%"/>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#C1272D"}}>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                             variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>
                                Launch
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                            Greatly hearted has who believe. 
                            Drift allow green son walls years for blush. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Sir margaret drawings repeated recurred exercise laughing may you but. 
                                Do repeated whatever to welcomed absolute no. 
                                Fat surprise although outlived and informed shy dissuade property. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Musical by me through he drawing savings an. No we stand avoid decay heard mr. 
                                Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg style={{alignSelf: "center"}}>
                        <img src={launch} alt="launch img" style={{maxWidth: 200}} width="100%"/>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#8E45CE"}}>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>
                                Maintain
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Greatly hearted has who believe. 
                             Drift allow green son walls years for blush. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Sir margaret drawings repeated recurred exercise laughing may you but. 
                                Do repeated whatever to welcomed absolute no. 
                                Fat surprise although outlived and informed shy dissuade property. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                             style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Musical by me through he drawing savings an. No we stand avoid decay heard mr. 
                                Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg style={{alignSelf: "center"}}>
                        <img src={maintain} alt="maintain img" style={{maxWidth: 500}} width="100%"/>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesMD ? "column" : "row"}C className={classes.rowContainer} style={{backgroundColor: "#29ABE2"}}>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>
                                Iterate
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Greatly hearted has who believe. 
                                Drift allow green son walls years for blush. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Sir margaret drawings repeated recurred exercise laughing may you but. 
                                Do repeated whatever to welcomed absolute no. 
                                Fat surprise although outlived and informed shy dissuade property. 
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined}
                                style={{color: "#fff", maxWidth: "20em"}} variant="body1" paragraph>
                                Musical by me through he drawing savings an. No we stand avoid decay heard mr. 
                                Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg style={{alignSelf: "center"}}>
                        <img src={iterate} alt="iterate img" style={{maxWidth: "30em"}} width="100%"/>
                    </Grid>
                </Grid>
            </Grid>
    )
}
