import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const NavBar = () => {

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                      <Button><Link to="/">Dive Maps</Link></Button>
                      <Button><Link to="/diveSites">Divesites</Link></Button>
                      <Button><Link to="/createDivesite">Create Dive Site</Link></Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
