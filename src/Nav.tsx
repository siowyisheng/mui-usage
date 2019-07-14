/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import {
  Drawer,
  Link,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Theme,
  Hidden
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { mainPages, componentPages } from './pages'
import logo from './static/mui-small-logo.png'

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 3)
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerRoot: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  listItem: {
    padding: theme.spacing(1, 3)
  },
  nestedListItem: {
    backgroundColor: '#f8f8f8',
    padding: theme.spacing(1, 6)
  }
}))

const Nav: React.FC<{
  mobileOpen: boolean
  setMobileOpen: (val: boolean) => void
}> = ({ mobileOpen, setMobileOpen }) => {
  const [componentsOpen, setComponentsOpen] = useState(false)
  const classes = useStyles()

  const drawer = (
    <React.Fragment>
      <div className={classes.toolbar}>
        <Link
          component={RouterLink}
          to='/mui-usage/'
          css={{
            display: 'inherit',
            alignItems: 'center'
          }}
          onClick={() => setMobileOpen(false)}
        >
          <img css={{ marginRight: 8 }} alt='logo' src={logo} />
          <Typography component='span' variant='h6'>
            Material UI Usage
          </Typography>
        </Link>
      </div>
      <Divider />
      <List>
        {Object.entries(mainPages).map(page => (
          <React.Fragment>
            <RouterLink
              css={{ color: 'initial', textDecoration: 'none' }}
              key={page[1].linkText}
              to={page[1].path}
              onClick={() => setMobileOpen(false)}
            >
              <ListItem button className={classes.listItem}>
                <ListItemText primary={page[1].linkText} />
              </ListItem>
            </RouterLink>
            {page[0] === 'box' && (
              <React.Fragment>
                <ListItem
                  onClick={() => setComponentsOpen(!componentsOpen)}
                  button
                  className={classes.listItem}
                >
                  <ListItemText primary='Components' />
                </ListItem>
                <Collapse in={componentsOpen} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    {Object.entries(componentPages).map(page => (
                      <RouterLink
                        css={{ color: 'initial', textDecoration: 'none' }}
                        key={page[1].linkText}
                        to={page[1].path}
                        onClick={() => setMobileOpen(false)}
                      >
                        <ListItem button className={classes.nestedListItem}>
                          <ListItemText primary={page[1].linkText} />
                        </ListItem>
                      </RouterLink>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            )}
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  )
  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation='js'>
        <Drawer
          variant='temporary'
          anchor='left'
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='js'>
        <Drawer
          variant='permanent'
          classes={{ root: classes.drawerRoot, paper: classes.drawerPaper }}
          anchor='left'
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}
export default Nav
