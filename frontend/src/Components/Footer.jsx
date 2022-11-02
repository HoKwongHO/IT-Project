import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link, makeStyles, Typography } from '@material-ui/core';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const Footer = () => {
    const classes=useStyles();

  return (
    <div className="footerWrapper">

        <div className="footerLinks">
            <Typography className={classes.root}>
                <Link href="https://translate.google.com/" target="_blank" >
                    {'English(Australia)'}
                </Link>
                <Link href="/Policy" target="_blank" >
                    {'Sales And Refunds'}
                </Link>
                <Link href="https://github.com/HoKwongHO/IT-Project" target="_blank" >
                    {'About Us'}
                </Link>
                
            </Typography>
            <div>
                <Link href="https://www.instagram.com/" target="_blank" >
                    <InstagramIcon/>
                </Link>
                <Link href="https://www.facebook.com/" target="_blank" >
                    <FacebookIcon/>
                </Link>
                <Link href="https://www.twitter.com/" target="_blank" >
                    <TwitterIcon/>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Footer