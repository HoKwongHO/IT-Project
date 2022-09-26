import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import SalesIcon from '@material-ui/icons/SentimentVerySatisfied';
import SiteMapIcon from '@material-ui/icons/Search';
import AboutUsIcon from '@material-ui/icons/People';
import InsIcon from '@material-ui/icons/Instagram';
import FBIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Language" icon={<LanguageIcon />} />
            <BottomNavigationAction label="Sales and Refunds" icon={<SalesIcon />} />
            <BottomNavigationAction label="Site Maps" icon={<SiteMapIcon />} />
            <BottomNavigationAction label="About Us" icon={<AboutUsIcon />} />
            <BottomNavigationAction icon={< InsIcon/>} /> 
            <BottomNavigationAction icon={< FBIcon />} /> 
            <BottomNavigationAction icon={< TwitterIcon />} />  
            // Ins, Facebook, Twitter...
        </BottomNavigation>
    );
}

// Language
// Sales and Refunds
// Site Maps
// About Us
// Ins, Facebook, Twitter...