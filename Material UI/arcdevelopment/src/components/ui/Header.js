import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.svg'
// import { IconButton } from '@material-ui/core';

const ElevationScroll = (props) => {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")] : {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")] : {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "25px"
  },
  drawerIcon: {
    height: "50px",
    weight: "50px"
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
    width: "250px"
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    "& .MuiListItemText-root" : {
      opacity: 1
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }
}))
  

export default function Header (props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const [openDrawer, setOpenDrawer] = useState(false)
  
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    props.setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOptions = [{name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0}, 
  {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1},
  {name: "iOS/Android App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2}, 
  {name: "Website Developement", link: "/websites", activeIndex: 1, selectedIndex: 3}]

  const routes = [{name: "Home", link: "/", activeIndex: 0,}, 
  {name: "Services", link: "/services", activeIndex: 1, 
  ariaOwns: anchorEl ? "simple-menu" : undefined, 
  ariaPopup: anchorEl ? "true" : undefined, mouseOver: event => handleClick(event)}, 
  {name: "The Revolution", link: "/revolution", activeIndex: 2},  
  {name: "About Us", link: "/about", activeIndex: 3},
  {name: "Contact Us", link: "/contact", activeIndex: 4}]

  useEffect(() => {

    [...menuOptions, ...routes].forEach(route => {
     switch (window.location.pathname) {
        case `${route.link}`:
          if(props.value !== route.activeIndex){
            props.setValue(route.activeIndex)
            if(route.selectedIndex && route.selectedIndex !== props.selectedIndex){
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break;
          case '/estimate':
            props.setValue(5);
            break
        default:
          break;
      }
  })
  }, [props.value, menuOptions, routes, props.selectedIndex, props])

  const tabs = (
    <React.Fragment>
      <Tabs value={props.value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
        {routes.map((route, index) => (
          <Tab className={classes.tab} 
          component={Link} to={route.link} 
          label={route.name}
          key={`${route} ${index}`}
          aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup}
          onMouseOver={route.mouseOver} />
        ))}
      </Tabs>
      <Button variant="contained" color="secondary" 
        className={classes.button} 
        component={Link} to="/estimate" 
        onClick={() => props.setValue(5)}>
          Free Estimate</Button>
        <Menu onClose={handleClose} 
          id="simple-Menu" 
          anchorEl={anchorEl} 
          open={openMenu} 
          classes={{paper: classes.menu}} 
          MenuListProps={{onMouseLeave: handleClose}} 
          elevation={0} keepMounted 
          style={{zIndex: 1302}}>
            {menuOptions.map((option, i) => (
              <MenuItem
                key={`${option} ${i}`}
                component={Link} 
                to={option.link}
                classes={{root: classes.menuItem}} 
                onClick={event => {handleMenuItemClick(event, i); props.setValue(1); handleClose()}} 
                selected={i === props.selectedIndex && props.value === 1}>
                  {option.name}
              </MenuItem>
        ))}
        </Menu>
    </React.Fragment>
  )
  
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} 
      disableDiscovery={iOS} 
      open={openDrawer} 
      onClose={() => setOpenDrawer(false)} 
      onOpen={() => setOpenDrawer(true)}
      classes={{paper: classes.drawer}}>
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map(route => (
            <ListItem onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}} 
            divider button 
            key={`${route} ${route.activeIndex}`}
            component={Link} to={route.link} 
            selected={props.value === route.activeIndex}
            classes={{selected: classes.drawerItemSelected}}>
              <ListItemText disableTypography className={classes.drawerItem}>{route.name}</ListItemText>
            </ListItem>
          ))}
          <ListItem onClick={() => {setOpenDrawer(false); props.setValue(5)}} divider button 
            classes={{root: classes.drawerEstimate, selected: classes.drawerItemSelected}} 
            component={Link} to="/estimate" selected={props.value === 5}>
            <ListItemText disableTypography className={classes.drawerItem}>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.drawerIconContainer} disableRipple>
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </React.Fragment>
  )

    return(
      <React.Fragment>
        <ElevationScroll>
          <AppBar position="fixed" color="primary" className={classes.appbar}>
              <Toolbar disableGutters>
                <Button disableRipple component={Link} to="/" onClick={() => props.setValue(0)} className={classes.logoContainer}>
                  <img src = {logo} className={classes.logo} alt="company logo" />
                </Button>
                {matches ? drawer : tabs}
              </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className = {classes.toolbarMargin} />
      </React.Fragment>
    )
}

