import OverviewView from './views/OverviewView'
import BoxView from './views/BoxView'
import LandingView from './views/LandingView'
import CustomizingStylesView from './views/CustomizingStylesView'
import DynamicStylesView from './views/DynamicStylesView'
import NavigationView from './views/NavigationView'
import SurfacesView from './views/SurfacesView'
import UserInputView from './views/UserInputView'
import DataDisplayView from './views/DataDisplayView'
import LayoutView from './views/LayoutView'
import OtherComponentsView from './views/OtherComponentsView'

export const mainPages = {
  overview: {
    linkText: 'Overview',
    path: '/overview/',
    component: OverviewView
  },
  box: {
    linkText: 'Box',
    path: '/box/',
    component: BoxView
  },
  customizingStyles: {
    linkText: 'Customizing styles',
    path: '/customizing-styles/',
    component: CustomizingStylesView
  },
  dynamicStyles: {
    linkText: 'Dynamic styles',
    path: '/dynamic-styles/',
    component: DynamicStylesView
  }
}

export const componentPages = {
  navigation: {
    linkText: 'Navigation',
    path: '/navigation/',
    component: NavigationView
  },
  surfaces: {
    linkText: 'Surfaces',
    path: '/surfaces/',
    component: SurfacesView
  },
  userInput: {
    linkText: 'User input',
    path: '/user-input/',
    component: UserInputView
  },
  dataDisplay: {
    linkText: 'Data display',
    path: '/data-display/',
    component: DataDisplayView
  },
  layout: {
    linkText: 'Layout',
    path: '/layout/',
    component: LayoutView
  },
  otherComponents: {
    linkText: 'Other components',
    path: '/other-components/',
    component: OtherComponentsView
  }
}

const landingView = {
  linkText: null,
  path: '/',
  component: LandingView
}

export const allPages = { ...mainPages, ...componentPages, landingView }
// 1. Overview

// 3. Navigation
//     App Bar:
//     drawers: permanent for desktop, temporary drawer for mobile

// 4. Surfaces
//     Paper: theme.spacing(3, 2)
//     Cards: display content and actions on a single topic.
//     Menu: ?
//     Dialogs: Responsive full-screen
//     Snackbar: Awesome!

// 5. User input
//     Button: variants, size=small|medium|large customizing
//     Fab
//     FormControlLabel checkbox/radio
//     RadioGroup
//     Slider???
//     Switch: with label, for mobile!
//     Textfield: outlined
//     CircularProgress: w/wo variant='determinate' (delayed loading)

// 6. Data display
//     Avatar: For representing persons
//     Badge: for notifications, use with max
//     Chips: representing objects
//     Divider: fancy hr, with variant=middle
//     Icon:
//     Typography:

// 7. Layout components
//     Grid container spacing={2}
//         Grid item xs={12} md={6}

// 8. Box

// 9. Other components
//     Link: normal use, and use with react-router
//     Container: sensible side margins
//     CSSBaseline: just import it for sensible css rules
//     useMediaQuery:

// 2. Styles from props
// 3. Custom styles
