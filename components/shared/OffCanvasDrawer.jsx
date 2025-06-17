import { useEffect, useState, forwardRef, useRef } from 'react';
import Image from 'next/image';
import cx from 'classnames';

const OffCanvasDrawer = forwardRef(({ isDrawerOpen, handleDrawerClose, trapKeyBoardMobileNav }, ref) => {
    const navAccordionBtnRef = useRef(null);
    const [isAccordionOpen, setIsAccordionOpen] = useState({});

    const handleNavAccordionBtnToggle = (e, accordionId) => {
        const accordionNav = e.currentTarget.nextElementSibling;
        const parentElement = e.currentTarget.parentElement;
        const siblingElements = Array.from(parentElement.parentElement.children).filter(
            (child) => child !== parentElement
        );
    
        // Helper function to close all child accordions recursively
        const closeAllChildAccordions = (parent) => {
            const childAccordions = parent.querySelectorAll('ul');
            childAccordions.forEach((childAccordion) => {
                jQuery(childAccordion).slideUp();
            });
        };
    
        // Close all sibling accordions and their child elements
        siblingElements.forEach((sibling) => {
            const siblingAccordionNav = sibling.querySelector('ul');
            if (siblingAccordionNav) {
                jQuery(siblingAccordionNav).slideUp();
                closeAllChildAccordions(sibling); // Close all child accordions of the sibling
            }
        });
    
        // Update state to close all sibling accordions and their children
        setIsAccordionOpen((prevState) => {
            const updatedState = { ...prevState };
            siblingElements.forEach((sibling) => {
                const siblingId = sibling.getAttribute('data-accordion-id');
                if (siblingId) {
                    updatedState[siblingId] = false;
                }
    
                // Close child accordions' state
                const childAccordionIds = sibling.querySelectorAll('[data-accordion-id]');
                childAccordionIds.forEach((child) => {
                    const childId = child.getAttribute('data-accordion-id');
                    if (childId) {
                        updatedState[childId] = false;
                    }
                });
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
    };

    useEffect(() => {
        if (isDrawerOpen && ref.current) {
        ref.current.addEventListener('keydown', trapKeyBoardMobileNav, false);
        }
        return () => {
        if (ref.current) {
            ref.current.removeEventListener('keydown', trapKeyBoardMobileNav, false);
        }
        };
    }, [isDrawerOpen, trapKeyBoardMobileNav]);

    return (
        <>
                <div 
                ref={ref}
                className={cx(
                    'js-offcanvas',
                    'c-offcanvas',
                    'c-offcanvas--right',
                    'c-offcanvas--overlay',
                    'is-animating',
                    { 'is-open': isDrawerOpen }
                )}
                id="off-canvas" 
                role="dialog"
                tabIndex="-1"
                aria-hidden={!isDrawerOpen}
                >
                <div className="c-offcanvas__inner">
                    <div className="menuTitleBar">
                    <h2>Menu</h2>
                    <button 
                        type="button" 
                        className="js-offcanvas-close c-button" 
                        aria-label="Close Menu"
                        role='button'
                        aria-controls='off-canvas'
                        aria-expanded={isDrawerOpen ? 'true' : 'false'}
                        onClick={handleDrawerClose}
                    >
                        <span className="c-button__text">
                        <i className="fa fa-times"></i>
                        </span>
                    </button>
                    </div>

                    <div className="search hidden-sm">
                    <div id="ContentSearchMobile" role="search">
                        <label htmlFor="cid_1173_tbSearcha" id="cid_1173_litSearch">Search Content: </label>
                        <input
                        name="cid_1173_tbSearcha"
                        size="10"
                        id="cid_1173_tbSearcha"
                        type="text"
                        role="searchbox"
                        className="searchInput"
                        placeholder="Search"
                        style={{ backgroundColor: '#fff'}}
                        />
                        <span className="SearchModuleSpacer">&nbsp;</span>
                        <Image
                        src="/btn_search.png"
                        id="cid_1173_imgbtnSearch"
                        alt="Search Button"
                        className="searchBtn"
                        style={{ cursor: 'pointer' }}
                        width="26"
                        height="26"
                        />
                    </div>
                    </div>

                    <nav className="mobileNav mainNav mobile-nav-js" id="ContentMobileNavNow">
                    <ul>
                        <li className="selected"><a href="#">Page One</a>
                        <ul>
                            <li><a href="#">Sub Page 1</a></li>
                            <li><a href="#">Sub Page 2</a></li>
                            <li><a href="#">Sub Page 3</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Page 2</a></li>
                        <li className={cx('has-subnav', { active: isAccordionOpen[3] })} aria-haspopup="true" style={{position: 'relative'}} data-accordion-id='3'>
                            <a href="#" style={{marginRight: '60px'}}>Page Three</a>
                                <button
                                ref={navAccordionBtnRef}
                                onClick={(e) => handleNavAccordionBtnToggle(e, 3)}
                                className={cx('accordion-btn-wrap', { 'accordion-active': isAccordionOpen[3] })}
                                type="button"
                                tabIndex="0"
                                aria-expanded={!isAccordionOpen[3]}
                                style={{
                                    width: '60px',
                                    height: '46.5px',
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
                                    <li className=""><a href="#">Sub Page 1</a></li>
                                    <li className={cx('has-subnav', { active: isAccordionOpen[4] })} aria-haspopup="true" style={{position: 'relative'}} data-accordion-id='4'>
                                        <a href="#" style={{marginRight: '60px'}}>Sub Page 2</a>
                                            <button
                                            ref={navAccordionBtnRef}
                                            onClick={(e) => handleNavAccordionBtnToggle(e, 4)}
                                            className={cx('accordion-btn-wrap', { 'accordion-active': isAccordionOpen[4] })}
                                            type="button"
                                            tabIndex="0"
                                            aria-expanded={!isAccordionOpen[4]}
                                            style={{
                                                width: '60px',
                                                height: '42.5px',
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
                                                        display: isAccordionOpen[4] ? 'none' : 'inline-block',
                                                        width: '100%',
                                                        lineHeight: '0px',
                                                        height: '0px'
                                                    }}
                                                >
                                                    <span className="fa fa-plus" />
                                                    <span className="sr-only">Expand Page Two Submemu</span>
                                                </span>
                                                <span
                                                    className="accordion-btn accordion-expanded"
                                                    style={{
                                                        display: isAccordionOpen[4] ? 'inline-block' : 'none', 
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
                                                <li className=""><a href="#">Sub Page 1</a></li>
                                                <li className=""><a href="#">Sub Page 2</a></li>
                                                <li className=""><a href="#">Sub Page 3</a></li>
                                            </ul>
                                    </li>
                                    <li className=""><a href="#">Sub Page 3</a></li>
                                </ul>
                        </li>
                        <li><a href="#">Page 4</a></li>
                        <li className={cx('has-subnav', { active: isAccordionOpen[5] })} aria-haspopup="true" style={{position: 'relative'}} data-accordion-id='5'>
                            <a href="#" style={{marginRight: '60px'}}>Page Five</a>
                                <button
                                    ref={navAccordionBtnRef}
                                    onClick={(e) => handleNavAccordionBtnToggle(e, 5)}
                                    className={cx('accordion-btn-wrap', { 'accordion-active': isAccordionOpen[5] })}
                                    type="button"
                                    tabIndex="0"
                                    aria-expanded={!isAccordionOpen[5]}
                                    style={{
                                        width: '60px',
                                        height: '46.5px',
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
                                            display: isAccordionOpen[5] ? 'none' : 'inline-block',
                                            width: '100%',
                                            lineHeight: '0px',
                                            height: '0px'
                                        }}
                                    >
                                        <span className="fa fa-plus" />
                                        <span className="sr-only">Expand Page Five Submemu</span>
                                    </span>
                                    <span
                                        className="accordion-btn accordion-expanded"
                                        style={{
                                            display: isAccordionOpen[5] ? 'inline-block' : 'none', 
                                            width:' 100%', 
                                            lineHeight: '0px', 
                                            height: '0px'
                                        }}
                                    >
                                        <span className="fa fa-minus" />
                                        <span className="sr-only">Collapse Page Five Submemu</span>
                                    </span>
                                </button>
                                <ul style={{display: 'none'}} >
                                    <li className=""><a href="#">Sub Link 1</a></li>
                                    <li className=""><a href="#">Page Link 2</a></li>
                                    <li className=""><a href="#">Sub Longer Link 3</a></li>
                                    <li className=""><a href="#">Another Link 4</a></li>
                                </ul>
                        </li>
                    </ul>
                    </nav>

                    <nav className="mobileUtilityNavNow" id="ContentMobileUtilNav">
                    <ul>
                        <li><a href="#">University Home</a></li>
                        <li><a href="#">Alumni Home</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    </nav>

                    <nav className="mobileUtilityNavNow" id="ContentMobileMTNavNow">
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                    </nav>
                </div>
                </div>
                <div className={cx(
                    'c-offcanvas-bg',
                    'c-offcanvas-bg--right',
                    'c-offcanvas-bg--overlay',
                    {'is-open': isDrawerOpen, 'is-closed': !isDrawerOpen}
                )}></div>
        </>
    );
});

export default OffCanvasDrawer;