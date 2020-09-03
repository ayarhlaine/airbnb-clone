import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
import { IconButton } from '@material-ui/core';
import './Header.scss';
function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null);
      };
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    return (
        <div className="header">
            <img className="header__logoImage" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt=""/>
            <div className="headerSearch">
                <Button variant="contained" className="header__searchInputContainer">
                    Start your search
                    <div className="header__searchIconContainer">
                        <SearchIcon />
                    </div>
                </Button>
            </div>
            <div className="headerRight">
                <Button variant="contained" className="header__hostButton">
                    Become a host
                </Button>
                <IconButton aria-haspopup="true" onClick={handleClick}>
                    <LanguageIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <LanguageIcon />
                        English
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <LanguageIcon />
                        Myanmar
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Header
