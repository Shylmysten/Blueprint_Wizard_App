'use client';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
import { useEffect, useState, useContext, useRef } from 'react';
import { updateTheme, updateSection, updateFooter, updateHeader } from '../../utils/actions';
import { trapKeyBoardMobileNav, handleDrawerOpen, handleDrawerClose } from '@/utils/offCanvasUtils';
import { MemberToolsToggleContext } from '@/utils/MemberToolsToggleContext';
import { SocialMediaToggleContext } from '@/utils/SocialMediaToggleContext';
import { DropdownToggleContext } from '../../utils/DropdownToggleContext';
import { LoadingContext } from '@/utils/LoadingContext';
import DrawerOneComponent from '@/components/header-components/header1-components/DrawerOneComponent';
import OverlayOneComponent from '@/components/header-components/header1-components/OverlayOneComponent';
import OffCanvasOneComponent from '@/components/header-components/header1-components/OffCanvasOneComponent';
import DrawerTwoComponent from '@/components/header-components/header2-components/DrawerTwoComponent';
import OverlayTwoComponent from '@/components/header-components/header2-components/OverlayTwoComponent';
import OffCanvasTwoComponent from '@/components/header-components/header2-components/OffCanvasTwoComponent';
import DrawerThreeComponent from '@/components/header-components/header3-components/DrawerThreeComponent';
import OverlayThreeComponent from '@/components/header-components/header3-components/OverlayThreeComponent';
import OffCanvasThreeComponent from '@/components/header-components/header3-components/OffCanvasThreeComponent';
import DrawerFourComponent from '@/components/header-components/header4-components/DrawerFourComponent';
import OverlayFourComponent from '@/components/header-components/header4-components/OverlayFourComponent';
import OffCanvasFourComponent from '@/components/header-components/header4-components/OffCanvasFourComponent';
import OffCanvasDrawer from '@/components/shared/OffCanvasDrawer';
import LoadingSpinner from '@/components/shared/LoadingSpinner';



export default function IframePage() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [headerCategory, setHeaderCategory] = useState('');
  const [headerItem, setHeaderItem] = useState('');
  const { isDropdownToggleSwitchOn, setIsDropdownToggleSwitchOn } = useContext(DropdownToggleContext);
  const { isSocialMediaToggleSwitchOff, setIsSocialMediaToggleSwitchOff }  = useContext(SocialMediaToggleContext);
  const { isMemberToolsToggleSwitchOff ,setIsMemberToolsToggleSwitchOff} = useContext(MemberToolsToggleContext)
  const offCanvasRef = useRef(null); // Ref for the #off-canvas element
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isLoading, setIsLoading } = useContext(LoadingContext);


  //useEffect(() => {
  //  console.log('isLoading state in IframePage:', isLoading);
  //}, [isLoading]);


  // Ensure the component is mounted on the client
  useEffect(() => {
    // set custom stylesheet
    const customStylesheet = document.createElement('link');
    customStylesheet.rel = 'stylesheet';
    customStylesheet.href = '/css/previewCustom.css'; // make sure this file exists in /public
    customStylesheet.id = 'custom-stylesheet';
    document.head.appendChild(customStylesheet);

    // ✅ Load Default Theme Stylesheet (Simple Square)
    const defaultTheme = 'theme0Style';
    const defaultStylesheet = document.createElement('link');
    defaultStylesheet.rel = 'stylesheet';
    defaultStylesheet.href = '/css/simpleSquare.css'; // make sure this file exists in /public
    defaultStylesheet.id = 'theme-stylesheet';
    document.head.insertBefore(defaultStylesheet, customStylesheet);

    // ✅ Set Default Theme Class on <body>
    document.body.classList.add(defaultTheme);
    
    const jQueryScript = document.createElement('script');
    jQueryScript.src = '/js/jquery-1.9.1.min.js';
    jQueryScript.async = true;
    document.head.appendChild(jQueryScript);

    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      const { type, payload } = event.data || {};

      switch (type) {
        case 'UPDATE_THEME':
          updateTheme(payload);
          break;
        case 'UPDATE_LOADING_STATE':
          const { isLoading: isLoadingState } = payload;
          //console.log('Received isLoading in Iframe:', isLoadingState);
          setIsLoading(isLoadingState);
          break;
        case 'UPDATE_MEMBERTOOLS_STATE':
          const { isMemberToolsToggleSwitchOff: memberToolsState } = payload;
          console.log('Received isMemberToolsToggleSwitchOff in Iframe:', memberToolsState);
          setIsMemberToolsToggleSwitchOff(memberToolsState);
          break;
        case 'UPDATE_HEADER':
          const { category, item, isDropdownToggleSwitchOn } = payload;
          updateHeader(category, item, null, isDropdownToggleSwitchOn); // Pass isDropdownToggleSwitchOn
          setHeaderCategory(category);
          setHeaderItem(item);
          break;
        case 'UPDATE_DROPDOWN_STATE':
          const { isDropdownToggleSwitchOn: dropdownState } = payload;
          //console.log('Received isDropdownToggleSwitchOn in Iframe:', dropdownState);
          setIsDropdownToggleSwitchOn(dropdownState);
          break;
        case 'UPDATE_SOCIALMEDIA_STATE':
          const { isSocialMediaToggleSwitchOff: socialMediaState } = payload;
          //console.log('Received isSocialMediaToggleSwitchOff in Iframe:', socialMediaState);
          setIsSocialMediaToggleSwitchOff(socialMediaState);
          break;
        case 'UPDATE_SECTION':
          updateSection(payload);
          break;
        case 'UPDATE_FOOTER':
          updateFooter(payload);
          break;
        default:
          console.warn(`Unhandled message type: ${type}`);
      }

    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [setIsDropdownToggleSwitchOn, isSocialMediaToggleSwitchOff, isMemberToolsToggleSwitchOff]);
    
  useEffect(() => {
    if (!isClient) return;

    // ✅ Load modernizr only after jQuery is loaded
    const modernizrScript = document.createElement('script');
    modernizrScript.src = '/js/modernizr-2.8.3.js';
    modernizrScript.async = true;
    document.head.appendChild(modernizrScript);

    // ✅ Load slick.min.js only after jQuery is loaded
    const slickScript = document.createElement('script');
    slickScript.src = '/js/slick.min.js';
    slickScript.async = true;
    document.body.appendChild(slickScript);
  
    // ✅ Load circular-countdown.js only after jQuery is loaded
    const circularcountdownScript = document.createElement('script');
    circularcountdownScript.src = '/js/circular-countdown.js';
    circularcountdownScript.async = true;
    document.body.appendChild(circularcountdownScript);

    // ✅ Load theFinalCountdown.js only after jQuery is loaded
    const finalcountdownScript = document.createElement('script');
    finalcountdownScript.src = '/js/theFinalCountdown.js';
    finalcountdownScript.async = true;
    document.body.appendChild(finalcountdownScript);

    // ✅ Load ImodTabs.custom.js only after jQuery is loaded
    const iModTabsScript = document.createElement('script');
    iModTabsScript.src = '/js/imodTabs.custom.js';
    iModTabsScript.async = true;
    document.body.appendChild(iModTabsScript);

    // ✅ LoadCountdown Script only after jQuery is Loaded
    slickScript.onload = () => {
      console.log('Slick is loaded and ready to use');
    };
    circularcountdownScript.onload = () => {
      console.log('Circular Countdown is loaded and ready to use');
    };
    finalcountdownScript.onload = () => {
      console.log('Final Countdown is loaded and ready to use');
    };
    iModTabsScript.onload = () => {
      console.log('iModTabs is loaded and ready to use');
    };
   
    // ✅ Load Vimeo Player Script
    const vimeoScript = document.createElement('script');
    vimeoScript.src = '//player.vimeo.com/api/player.js';
    vimeoScript.async = true;
    document.head.appendChild(vimeoScript);

   // Mark as initialized
   setIsInitialized(true);

  }, [isClient]);

  const renderHeaderComponent = () => {
    if (headerCategory === 'Header 1') {
      if(headerItem === 'DrawerOneComponent') {
        return <DrawerOneComponent isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff} isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} isIframeMounted={isInitialized}/>;
      }
      if(headerItem === 'OverlayOneComponent') {
        return <OverlayOneComponent isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff} isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} isIframeMounted={isInitialized}/>;
      }
      if(headerItem === 'OffCanvasOneComponent') {
        return <OffCanvasOneComponent 
                isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff}
                isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} 
                isDrawerOpen={isDrawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                setIsDrawerOpen={setIsDrawerOpen}
                offCanvasRef={offCanvasRef}
                trapKeyBoardMobileNav={trapKeyBoardMobileNav}
              />;
      }
    }
    if (headerCategory === 'Header 2') {
      if(headerItem === 'DrawerTwoComponent') {
        return <DrawerTwoComponent isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff} isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} isIframeMounted={isInitialized}/>;
      }
      if(headerItem === 'OverlayTwoComponent') {
        return <OverlayTwoComponent isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff} isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} isIframeMounted={isInitialized}/>;
      }
      if(headerItem === 'OffCanvasTwoComponent') {
        return <OffCanvasTwoComponent 
                isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff}
                isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} 
                isDrawerOpen={isDrawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                setIsDrawerOpen={setIsDrawerOpen}
                offCanvasRef={offCanvasRef}
                trapKeyBoardMobileNav={trapKeyBoardMobileNav}
              />;
      }
    }
    if (headerCategory === 'Header 3') {
      if(headerItem === 'DrawerThreeComponent') {
        return <DrawerThreeComponent isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff} isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} isIframeMounted={isInitialized}/>;
      }
      if(headerItem === 'OverlayThreeComponent') {
        return <OverlayThreeComponent isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff} isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} isIframeMounted={isInitialized}/>;
      }
      if(headerItem === 'OffCanvasThreeComponent') {
        return <OffCanvasThreeComponent 
                isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff}
                isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} 
                isDrawerOpen={isDrawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                setIsDrawerOpen={setIsDrawerOpen}
                offCanvasRef={offCanvasRef}
                trapKeyBoardMobileNav={trapKeyBoardMobileNav}
              />;
      }
    }
    if (headerCategory === 'Header 4') {
      if(headerItem === 'DrawerFourComponent') {
        return <DrawerFourComponent isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff} isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} isIframeMounted={isInitialized}/>;
      }
      if(headerItem === 'OverlayFourComponent') {
        return <OverlayFourComponent isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff} isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} isIframeMounted={isInitialized}/>;
      }
      if(headerItem === 'OffCanvasFourComponent') {
        return <OffCanvasFourComponent 
                isSocialMediaToggleSwitchOff={isSocialMediaToggleSwitchOff}
                isDropdownToggleSwitchOn={isDropdownToggleSwitchOn} 
                isDrawerOpen={isDrawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                setIsDrawerOpen={setIsDrawerOpen}
                offCanvasRef={offCanvasRef}
                trapKeyBoardMobileNav={trapKeyBoardMobileNav}
              />;
      }
    }

    return <div className="empty"><h2 className="previewDefault">Header</h2></div>;
  };

  if (!isClient) {
    return (
      <LoadingSpinner />
    )
  }

  return (
    <> 
    {isLoading && (
      <LoadingSpinner />
    )}
      <div className="frameWrap" style={{opacity: isInitialized ? '1' : '0', transition: '500ms ease-in all'}}>
        <div id="outer-wrap" className="m-pikabu-viewport">
          <div id="inner-wrap" className="m-pikabu-container">

            <section className="bp-search" id="bpSearch">
              <div className="structSearch imod-search-1 noShow hidden-xs" role="banner" id="searchWrapper" data-sectioname="search-1" aria-expanded="false" tabIndex="-1">
              <div className="mainSearchWrap">
                  <div className="container">
                        <div className="row">
                            <div className="search hidden-xs col-md-8 col-md-push-2">
                                <div id="ContentSearch" runat="server" role="search">
                                    <label htmlFor="cid_1172_tbSearch" id="cid_1172_litSearch">Search Content: </label>
                                    <input name="cid_1172$tbSearch" size="10" id="cid_1172_tbSearch" type="text" style={{backgroundColor: 'white'}} tabIndex='-1' className='searchInput' role='searchbox'/>
                                    <span className="SearchModuleSpacer">&nbsp;</span>
                                    <img role='button' src="/btn_search.png" id="cid_1172_imgbtnSearch" alt="Search Button" border="0" align="absbottom" tabIndex='-1' className='searchBtn'/>
                                </div>
                                <div className="closeSearch">
                                    <a href="#" tabIndex="-1" role="button">Close Site Search</a>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
            </section>

            <div className={`imod-membertools-1 memberTools hidden-sm hidden-xs ${isMemberToolsToggleSwitchOff ? '' : 'hidden-lg'}`} data-sectionname="membertools-1">
                <div className="container">
                    <div className="row">
                        <nav id="ContentMemberTools" runat="server" className="memberToolInner col-md-12 imodSiteMap" aria-label="Community">
                            <ul>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <section className="bp-preview-section header-section empty" id="bpHeader">
            {renderHeaderComponent()}
            </section>

            <section className='bp-preview-section body-section empty odd home-section' id='bpSection1'>
              <div className="empty"><h2 className="previewDefault">Section 1</h2></div>
            </section>

            <section className='bp-preview-section body-section empty home-section' id='bpSection2'>
              <div className="empty"><h2 className="previewDefault">Section 2</h2></div>
            </section>

            <section className='bp-preview-section body-section empty odd home-section' id='bpSection3'>
              <div className="empty"><h2 className="previewDefault">Section 3</h2></div>
            </section>

            <section className='bp-preview-section body-section empty home-section' id='bpSection4'>
              <div className="empty"><h2 className="previewDefault">Section 4</h2></div>
            </section>

            <section className='bp-preview-section body-section empty odd home-section' id='bpSection5'>
              <div className="empty"><h2 className="previewDefault">Section 5</h2></div>
            </section>

            <section className='bp-preview-section body-section empty home-section' id='bpSection6'>
              <div className="empty"><h2 className="previewDefault">Section 6</h2></div>
            </section>

            <section className="bp-preview-section footer-section empty" id="bpFooter">
              <div className="empty"><h2 className="previewDefault">Footer</h2></div>
            </section>

            {/* Navigation Drawer */}
            <OffCanvasDrawer
              ref={offCanvasRef}
              isDrawerOpen={isDrawerOpen}
              handleDrawerClose={() => handleDrawerClose(offCanvasRef, setIsDrawerOpen)}
              trapKeyBoardMobileNav={(e) => trapKeyBoardMobileNav(e, offCanvasRef, () => handleDrawerClose(offCanvasRef, setIsDrawerOpen))}
            />

          </div>
        </div>
      </div>
    </>

  );
}
