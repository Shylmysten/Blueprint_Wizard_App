'use client';
import ContentTopNavTwo from "@/components/shared/main-nav-two/ContentTopNavTwo";
import {header2NavigationData} from "@/data/navigation-items";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const OverlayTwoComponent = ({ isDropdownToggleSwitchOn, isSocialMediaToggleSwitchOff }) => {
    const searchToggleRef = useRef(null);
    const mobileNavRef = useRef(null);
    const mobileNavToggleRef = useRef(null);
    const navAccordionBtnRef = useRef(null);
    const isMobileNavOpenRef = useRef(false);
    const [isSearchWrapperOpen, setIsSearchWrapperOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState({});

    // Directly target the #searchWrapper element within the iframe's DOM
    const searchWrapper = document.querySelector("#searchWrapper");
    const searchInput = document.querySelector('#searchWrapper .searchInput');
    const searchBtn = document.querySelector('#searchWrapper .searchBtn');
    const searchCloseBtn = document.querySelector('#searchWrapper .closeSearch a');

    //useEffect(() => {
    //    console.log('OverlayTwoComponent re-rendered');
    //    console.log('isDropdownToggleSwitchOn in OverlayTwoComponent:', isDropdownToggleSwitchOn);
    //}, [isDropdownToggleSwitchOn])

    const handleSearchToggle = (event) => {
        event.preventDefault();
        
        if (isSearchWrapperOpen) {
            searchWrapper.classList.add("noShow");
            searchWrapper.classList.remove("show");
            searchWrapper.setAttribute('aria-expanded', 'false');
            searchInput.setAttribute('tabindex', '-1');
            searchBtn.setAttribute('tabindex', '-1');
            searchCloseBtn.setAttribute('tabindex', '-1');
            searchToggleRef.current.focus();
        } else {
            searchWrapper.classList.remove("noShow");
            searchWrapper.classList.add("show");
            searchWrapper.setAttribute('aria-expanded', 'true');
            searchInput.setAttribute('tabindex', '0');
            searchBtn.setAttribute('tabindex', '0');
            searchCloseBtn.setAttribute('tabindex', '0');
            searchInput.focus();
        }
        
        setIsSearchWrapperOpen((prevState) => !prevState);
    };

    const handleCloseSearch = () => {
        if (isSearchWrapperOpen) {

            searchWrapper.classList.add("noShow");
            searchWrapper.classList.remove("show");
            searchWrapper.setAttribute('aria-expanded', 'false');
            searchInput.setAttribute('tabindex', '-1');
            searchBtn.setAttribute('tabindex', '-1');
            searchCloseBtn.setAttribute('tabindex', '-1');
            searchToggleRef.current.focus();
        }
        setIsSearchWrapperOpen(false);
    };

    const handleMobileToggleClick = () => {
        var mobileNavWrap = jQuery('.overlay .desktopNav.mobileNav');
        var trappedNav = document.querySelector('.overlay .desktopNav.mobileNav');

        function trapKeyBoardMobileNav(e) {
            var mobileToggle =  document.querySelector('.m-pikabu-nav-toggle');
            var focusableElements = 'button, [href], [tabindex]:not([tabindex="-1"])';
            var nav = document.querySelector('.overlay .desktopNav.mobileNav');
            var focusableContent = [...nav.querySelectorAll(focusableElements)];
            focusableContent.unshift(mobileToggle);
            var firstFocusableElement = focusableContent[0]; // get first element to be focused inside nav
            var lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside nav


            var isTabPressed = e.key === 'Tab' || e.keyCode === 9;
            if (!isTabPressed) {
            return;
            }
            if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
            } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
            }
        }

        if(isMobileNavOpen) {
            console.log(isMobileNavOpen);
            mobileNavWrap.slideUp();
            jQuery('body').removeClass('openOverlay');
            trappedNav.removeEventListener('keydown', trapKeyBoardMobileNav, false);
           
        } else {
            console.log(isMobileNavOpen);
            mobileNavWrap.slideDown();
            jQuery('body').addClass('openOverlay');
            trappedNav.addEventListener('keydown', trapKeyBoardMobileNav, false);
            
        }
        setIsMobileNavOpen((prevState) => !prevState);


    }

    const handleNavAccordionBtnToggle = (e, accordionId) => {
        const accordionNav = e.currentTarget.nextElementSibling;
        const parentElement = e.currentTarget.parentElement;
        const siblingElements = Array.from(parentElement.parentElement.children).filter(
            (child) => child !== parentElement
        );

        // Close all sibling accordions
        siblingElements.forEach((sibling) => {
            const siblingAccordionNav = sibling.querySelector('ul');
            if (siblingAccordionNav) {
                jQuery(siblingAccordionNav).slideUp();
            }
        });

        // Update state to close all sibling accordions
        setIsAccordionOpen((prevState) => {
            const updatedState = { ...prevState };
            siblingElements.forEach((sibling) => { 
                const siblingId = sibling.getAttribute('data-accordion-id');
                if (siblingId) {
                    updatedState[siblingId] = false;
                }
            });
            return {
                ...updatedState,
                [accordionId]: !prevState[accordionId],
            };
        });

        // Toggle the clicked accordion
        if (isAccordionOpen[accordionId]) {
            jQuery(accordionNav).slideUp();
        } else {
            jQuery(accordionNav).slideDown();
        }
    }

    // Manages Search Buttons
    useEffect(() => {

        if (searchCloseBtn) {
            searchCloseBtn.addEventListener('click', handleCloseSearch);
        }

        return () => {
            if (searchCloseBtn) {
                searchCloseBtn.removeEventListener('click', handleCloseSearch);
            }
        };
    }, [isSearchWrapperOpen]);

    // Manages Mobile Menu
    useEffect(() => {

        const handleKeyUp = (e) => {
            if (e.key === "Escape") {
                if (document.body.classList.contains("openOverlay")) {
                    jQuery('.overlay .desktopNav').slideUp();
                    document.body.classList.remove("openOverlay");
                    isMobileNavOpenRef.current = false; // Update the ref
                    setIsMobileNavOpen(false); // Update the state
                    mobileNavToggleRef.current.focus();
                }
            }
        };

        document.addEventListener("keyup", handleKeyUp);

        // Cleanup when the component unmounts
        return () => {
            //destroyNavAccordion();
            document.removeEventListener("keyup", handleKeyUp);
        };

    },[])




    return ( 
        <header className={`structHead imod-header-2 overlay ${isDropdownToggleSwitchOn ? 'dropdown' : ''}`} role="banner" id="top" data-sectionname="header-2">
            <div className="mainHeaderWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-sm-4 col-md-3 headLogo" id="ContentLogo" runat="server">
                            {/* Logo filename must be "logo.png" - The print version "logo-print.jpg" will get auto-generated by the build task */}
                            <div className="hidden-print">
                                <a href="#">
                                    <Image 
                                        src="/logo.png" 
                                        alt="Home" 
                                        className="darkTxt"
                                        width={2704}
                                        height={625}
                                        style={{width: '100%'}}
                                        priority
                                    />
                                    <Image 
                                        src="/logo-white.png" 
                                        alt="Home" 
                                        className="whiteTxt"
                                        width={2704}
                                        height={625}
                                        style={{width: '100%'}}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-8 col-md-9 headRight">

                            <div className="row">
                                <div id="ContentHeaderSocial" runat="server" className="col-xs-12 headerSocial hidden-xs">
                                    {isSocialMediaToggleSwitchOff ? (
                                        <ul className="social">
                                            <li><a href="#" target="_blank" aria-label="Facebook"><span className="fa fa-facebook"></span></a></li>
                                            <li><a href="#" target="_blank" aria-label="Twitter"><span className="fa-brands fa-x-twitter"></span></a></li>
                                            <li><a href="#" target="_blank" aria-label="Instagram"><span className="fa fa-instagram"></span></a></li>
                                            <li><a href="#" target="_blank" aria-label="YouTube"><span className="fa fa-youtube"></span></a></li>
                                            <li><a href="#" target="_blank" aria-label="Flickr"><span className="fa fa-flickr"></span></a></li>
                                            <li className="searchToggle">
                                                <a 
                                                    ref={searchToggleRef}
                                                    aria-label="Toggle Site Search" 
                                                    href="#" 
                                                    id="searchToggleBtn" 
                                                    role="button" 
                                                    aria-expanded={isSearchWrapperOpen} 
                                                    aria-controls="searchWrapper"
                                                    onClick={handleSearchToggle}
                                                >
                                                    <span className="fa fa-search"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    ) : (
                                        <ul className="social">
                                            <li className="searchToggle">
                                                <a 
                                                    ref={searchToggleRef}
                                                    aria-label="Toggle Site Search" 
                                                    href="#" 
                                                    id="searchToggleBtn" 
                                                    role="button" 
                                                    aria-expanded={isSearchWrapperOpen} 
                                                    aria-controls="searchWrapper"
                                                    onClick={handleSearchToggle}
                                                >
                                                    <span className="fa fa-search"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <a ref={mobileNavToggleRef} href="#" role="button" onClick={handleMobileToggleClick} className="m-pikabu-nav-toggle hidden-md hidden-lg" data-role="right" aria-label="Open Mobile Menu">
                                    <span className={`fa ${isMobileNavOpen ? 'fa-times' : 'fa-bars'}`}></span> 
                                    Menu
                                </a>
                            </div>
                            <div className="row">
                                {/* Desktop Navigation Bar */}
                                <div className="desktopNav col-md-12 hidden-sm hidden-xs">
                                    <ContentTopNavTwo
                                        navItems={header2NavigationData}
                                        isDropDownToggleSwitchOn={isDropdownToggleSwitchOn}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet/Mobile Navigation Bar */}
            <div ref={mobileNavRef} className="desktopNav mob mobileNav hidden-md hidden-lg" aria-hidden={isMobileNavOpen ? 'false' : "true"} aria-expanded={isMobileNavOpen ? "false" : 'true'}>
                <div className="container">
                    <div className="row">
                        <div className="search col-xs-12">
                            <div id="ContentSearchMobile" runat="server" role="search">
                                    <label htmlFor="cid_1172_tbSearch" id="cid_1172_litSearch">Search Content: </label>
                                    <input name="cid_1172_tbSearch" type="text" size="10" id="cid_1172_tbSearch" style={{backgroundColor: '#fff'}} aria-placeholder="Search" placeholder='Search' role="searchbox" tabIndex={isMobileNavOpen ? '0' : '-1'}/>
                                    <span className="SearchModuleSpacer">&nbsp;</span>
                                    <img src="/btn_search.png" id="cid_1172_imgbtnSearch" alt="Search Button" border="0" align="bottom" role="button" tabIndex={isMobileNavOpen ? '0' : '-1'}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <nav id="ContentTopNavNowMob" runat="server" className="desktopNavInner col-md-12 imodSiteMap" aria-label="Primary Mobile">
                            <ul>
                                <li><a href="#">Page One</a></li>
                                <li><a href="#">Page Two</a></li>
                                <li className={`has-subnav ${isAccordionOpen[3] ? 'active' : ''}`} aria-haspopup="true" style={{position: 'relative'}} data-accordion-id='3'>
                                    <a href="#" style={{marginRight: '60px'}}>Page Three</a>
                                        <button
                                        ref={navAccordionBtnRef}
                                        onClick={(e) => handleNavAccordionBtnToggle(e, 3)}
                                        className={`accordion-btn-wrap ${isAccordionOpen[3] ? 'accordion-active': ''}`}
                                        type="button"
                                        tabIndex="0"
                                        aria-expanded={!isAccordionOpen[3]}
                                        style={{
                                            width: '60px', 
                                            position: 'absolute', 
                                            top: '0px', 
                                            textAlign: 'center', 
                                            cursor: 'pointer', 
                                            display: 'inline-block', 
                                            right: '0px'
                                        }}
                                        >
                                            <span
                                                className="accordion-btn accordion-collapsed"
                                                style={{
                                                    display: isAccordionOpen[3] ? 'none' : 'inline-block',
                                                    width: '100%',
                                                    lineHeight: '0px',
                                                    height: '0px'
                                                }}
                                            >
                                                <span className="fa fa-plus" />
                                                <span className="sr-only">Expand Page Three Submemu</span>
                                            </span>
                                            <span
                                                className="accordion-btn accordion-expanded"
                                                style={{
                                                    display: isAccordionOpen[3] ? 'inline-block' : 'none', 
                                                    width:' 100%', 
                                                    lineHeight: '0px', 
                                                    height: '0px'
                                                }}
                                            >
                                                <span className="fa fa-minus" />
                                                <span className="sr-only">Collapse Page Three Submemu</span>
                                            </span>
                                        </button>
                                        <ul style={{display: 'none'}}>
                                            <li className=""><a href="#">Sub Link 1</a></li>
                                            <li className=""><a href="#">Page Link 2</a></li>
                                            <li className=""><a href="#">Sub Longer Link 3</a></li>
                                            <li className=""><a href="#">Another Link 4</a></li>
                                        </ul>
                                </li>
                                <li className="highlight"><a href="#">Page Four</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                    
                        <nav className="mobileUtilityNavNow" id="ContentMobileMTNavNow" runat="server" aria-label="Mobile Community">
                            <ul>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

     );
}
 
export default OverlayTwoComponent;