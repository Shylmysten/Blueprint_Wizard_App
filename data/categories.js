const video = [
  {
    label: 'Full-Width Vimeo Video',
    value: 'VimeoVideo', // Reference to the VimeoVideo Component
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  }
]

const rotators = [
  {
    label: 'Full-Width Hero Rotator',
    value: 'FullWidthHeroRotator',
  },
  {
    label: 'Center Feature Rotator',
    value: 'CenterFeatureRotator', // Reference to the VimeoVideo Component
  },
  {
    label: 'Image Gallery Carousel',
    value: 'ImageCarousel', // Reference to the VimeoVideo Component
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  }
]

const news = [
  {
    label: 'News Pattern 1',
    value: `NewsPatternOne`,
  },
  {
    label: 'News Pattern 2',
    value: `NewsPatternTwo`,
  },
  {
    label: 'News Pattern 3',
    value: `NewsPatternThree`,
  },
  {
    label: 'News Pattern 4',
    value: `NewsPatternFour`,
  },
  {
    label: 'News Pattern 5',
    value: `NewsPatternFive`,
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: '',
  },
]

const events = [
  {
    label: 'Events Pattern 1',
    value: `EventsPatternOne`
  },
  {
    label: 'Events Pattern 2',
    value: `EventsPatternTwo`
  },
  {
    label: 'Events Pattern 3',
    value: `EventsPatternThree`
  },
  {
    label: 'Events Pattern 4',
    value: `EventsPatternFour`
  },
  {
    label: 'Events Pattern 5',
    value: `EventsPatternFive`
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]

const text = [
  {
    label: 'Text Pattern 1',
    value: `TextPatternOne`
  },
  {
    label: 'Text Pattern 2',
    value: `TextPatternTwo`
  },
  {
    label: 'Text Pattern 3',
    value: `TextPatternThree`
  },
  {
    label: 'Text Pattern 4',
    value: `TextPatternFour`
  },
  {
    label: 'Text Pattern 5',
    value: `TextPatternFive`
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ``
  },
]

const giving = [
  {
    label: 'Gift Amount Buttons',
    value: `GivingButtons`
  },
  {
    label: 'Gift Amount Input',
    value: `GivingInput`
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ``
  },
]

const cpis = [
  {
    label: 'CPI Pattern 1',
    value: `CPIPatternOne`
  },
  {
    label: 'CPI Pattern 2',
    value: `CPIPatternTwo`
  },
  {
    label: 'CPI Pattern 3',
    value: `CPIPatternThree`
  },
  {
    label: 'CPI Pattern 4',
    value: `CPIPatternFour`
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ``
  },
]

const crowdfunding = [
  {
    label: '--- Detailed Layouts ---',
    value: '',
    disabled: true
  },
  {
    label: '3x4 Detailed Grid',
    value: `CF3x4Detailed`
  },
  {
    label: '3x4 Grid (CheckerBoard)',
    value: `CF3x4CBDetailed`
  },
  {
    label: '4x3 Detailed Grid',
    value: `CF4X3Detailed`
  },
  {
    label: '--- Condensed Layouts ---',
    value: '',
    disabled: true
  },
  {
    label: '3x4 Condensed Grid',
    value: `CF3x4Condensed`
  },
  {
    label: '3x4 Grid (CheckerBoard)',
    value: `CF3x4CBCondensed`
  },
  {
    label: '4x3 Condensed Grid',
    value: `CF4X3Condensed`
  },
  {
    label: '----------------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]

const countdowns = [
  {
    label: 'Countdown Pattern 1',
    value: 'CountDownTimerOne'
  },
  {
    label: 'Countdown Pattern 2',
    value: 'CountDownTimerTwo'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]

const quicklinks = [
  {
    label: 'Quicklinks Pattern 1',
    value: 'QuickLinksPatternOne'
  },
  {
    label: 'Quicklinks Pattern 2',
    value: 'QuickLinksPatternTwo'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]

const quotes = [
  {
    label: 'Quotes Pattern 1',
    value: 'QuotesPatternOne'
  },
  {
    label: 'Quotes Pattern 2',
    value: 'QuotesPatternTwo'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]

const tabs = [
  {
    label: 'Tabs Pattern 1',
    value: 'HorizontalTabsPattern'
  },
  {
    label: 'Tabs Pattern 2',
    value: 'VerticalTabsPattern'
  },
  {
    label: 'Tabs Pattern 3',
    value: 'FullWidthTabsPattern'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]

// MAINT SECTION OPTONS
const categories = {
  'Background Video Module': [...video],
  'Rotators & Carousels': [...rotators],
  'News Patterns':[...news],
  'Events Patterns': [...events],
  'Text Patterns': [...text],
  "Giving / CTA": [...giving],
  'Campaign Progress Indicators': [...cpis],
  'CrowdFunding Grid Patterns': [...crowdfunding],
  'Countdown Timers': [...countdowns],
  'QuickLinks': [...quicklinks],
  'Quotes': [...quotes],
  'Tabbed Content': [...tabs],
};

export default categories;

// FOOTER Sections Options
export const footerOptions = [
  {
    label: 'Footer 1',
    value: `<footer role="contentinfo" class="imod-foot-1" data-sectionname="footer-1"><div class="container"><div class="row"><div class="col-sm-2 footLogo"><div id="ContentFooterLogo" runat="server"><a href="#"><img src="/logo_footer.png" alt="Home"></a></div></div><div class="col-sm-7 col-md-7 footMid"><div id="ContentFooter" runat="server"><p><strong>Organization Name</strong></p><p>Address: 123 Main Street, Anytown, KS, 66219 | Phone Number: (913) 123-1234</p></div><div id="ContentFooterSocial" runat="server"><ul class="social"><li><a href="#" target="_blank" aria-label="Facebook"><span class="fa fa-facebook"></span></a></li><li><a href="#" target="_blank" aria-label="Twitter"><span class="fa-brands fa-x-twitter"></span></a></li><li><a href="#" target="_blank" aria-label="Instagram"><span class="fa fa-instagram"></span></a></li><li><a href="#" target="_blank" aria-label="YouTube"><span class="fa fa-youtube"></span></a></li><li><a href="#" target="_blank" aria-label="Flickr"><span class="fa fa-flickr"></span></a></li></ul></div></div><div class="col-sm-3 col-md-3 footRight"><div id="ContentFooterBtn" runat="server"><a href="#" class="button">Give Now</a></div></div></div></div></footer>`,
  },
  {
    label: 'Footer 2',
    value: `<footer role="contentinfo" class="imod-foot-2" data-sectionname="footer-2"><div class="mainFooter"><div class="container"><div class="row"><div class="col-xs-12 col-sm-2 col-sm-push-5 col-md-4 col-md-push-4 footLogo"><div id="ContentFooterLogo" runat="server"><div style="text-align:center"><a href="#"><img src="/logo_footer.png" alt="Home"></a></div></div></div><div class="col-xs-12 col-sm-5 col-sm-pull-2 col-md-4 col-md-pull-4 footerLeft"><div id="ContentFooterSocial" runat="server"><ul class="social"><li><a href="#" target="_blank" aria-label="Facebook"><span class="fa fa-facebook"></span></a></li><li><a href="#" target="_blank" aria-label="Twitter"><span class="fa-brands fa-x-twitter"></span></a></li><li><a href="#" target="_blank" aria-label="Instagram"><span class="fa fa-instagram"></span></a></li><li><a href="#" target="_blank" aria-label="YouTube"><span class="fa fa-youtube"></span></a></li><li><a href="#" target="_blank" aria-label="Flickr"><span class="fa fa-flickr"></span></a></li></ul></div></div><div class="col-xs-12 col-sm-5 col-md-4 footerRight"><div id="ContentFooterBtn" runat="server"><a href="#" class="button right">Give Now</a></div></div></div></div></div><div class="subFooter"><div class="container"><div class="row"><div class="col-xs-12 col-sm-6 subFooterLeft"><div id="ContentSubFooterLeft" runat="server">123 Main Street, Anytown, KS, 66219 | (913) 123-1234</div></div><div class="col-xs-12 col-sm-6 subFooterRight"><div id="ContentSubFooterRightNow" runat="server" class="imodSiteMap"><ul class="footerUtilityNav"><li><a href="#">Link 1</a></li><li><a href="#">Link 2</a></li><li><a href="#">Link 3</a></li></ul></div></div></div></div></div></footer>`,
  },
  {
    label: 'Footer 3',
    value: `<footer role="contentinfo" class="imod-foot-3" data-sectionname="footer-3"><div class="container"><div class="row"><div class="col-md-12 footLogo"><div id="ContentFooter" runat="server"><p><strong>Organization Name</strong></p><p>Address: 123 Main Street, Anytown, KS, 66219 | Phone Number: (913) 123-1234</p></div></div></div><div class="row"><div class="col-md-12"><div id="ContentFooterSocial" runat="server"><ul class="social"><li><a href="#" target="_blank" aria-label="Facebook"><span class="fa fa-facebook"></span></a></li><li><a href="#" target="_blank" aria-label="Twitter"><span class="fa-brands fa-x-twitter"></span></a></li><li><a href="#" target="_blank" aria-label="Instagram"><span class="fa fa-instagram"></span></a></li><li><a href="#" target="_blank" aria-label="YouTube"><span class="fa fa-youtube"></span></a></li><li><a href="#" target="_blank" aria-label="Flickr"><span class="fa fa-flickr"></span></a></li></ul></div></div></div></div></footer>`,
  },
];


// HEADER Components
const header1 = [
  {
    label: 'Drawer',
    value: 'DrawerOneComponent'
  },
  {
    label: 'Overlay',
    value: 'OverlayOneComponent'
  },
  {
    label: 'OffCanvas',
    value: 'OffCanvasOneComponent'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]
const header2 = [
  {
    label: 'Drawer',
    value: 'DrawerTwoComponent'
  },
  {
    label: 'Overlay',
    value: 'OverlayTwoComponent'
  },
  {
    label: 'OffCanvas',
    value: 'OffCanvasTwoComponent'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]

const header3 = [
  {
    label: 'Drawer',
    value: 'DrawerThreeComponent'
  },
  {
    label: 'Overlay',
    value: 'OverlayThreeComponent'
  },
  {
    label: 'OffCanvas',
    value: 'OffCanvasThreeComponent'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]

const header4 = [
  {
    label: 'Drawer',
    value: 'DrawerFourComponent'
  },
  {
    label: 'Overlay',
    value: 'OverlayFourComponent'
  },
  {
    label: 'OffCanvas',
    value: 'OffCanvasFourComponent'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]


export const headerCategories = {
  'Header 1': [...header1],
  'Header 2': [...header2],
  'Header 3': [...header3],
  'Header 4': [...header4],
}


const layout1 = [
  {
    label: 'Left SideBar',
    value: 'Layout1Left'
  },
  {
    label: 'Right Sidebar',
    value: 'Layout1Right'
  },
  {
    label: 'Left & Right Sidebar',
    value: 'Layout1Both'
  },
  {
    label: 'No Sidebar',
    value: 'Layout1None'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]
const layout2 = [
  {
    label: 'Left SideBar',
    value: 'Layout2Left'
  },
  {
    label: 'Right Sidebar',
    value: 'Layout2Right'
  },
  {
    label: 'Left & Right Sidebar',
    value: 'Layout2Both'
  },
  {
    label: 'No Sidebar',
    value: 'Layout2None'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]
const crowdfundinglayouts = [
  {
    label: 'Circular Indicator - Left',
    value: 'CFCircularLeft'
  },
  {
    label: 'Bar Indicator - Left',
    value: 'CFBarLeft'
  },
  {
    label: 'Circular Indicator - Right',
    value: 'CFCircularRight'
  },
  {
    label: 'Bar Indicator - Right',
    value: 'CFBarRight'
  },
  {
    label: '----------------',
    value: '',
    disabled: true
  },
  {
    label: 'Clear Section',
    value: ''
  },
]

export const intCategories = {
     'Layout Option 1': [...layout1],
     'Layout Option 2': [...layout2],
     'CrowdFunding Layouts': [...crowdfundinglayouts]
}