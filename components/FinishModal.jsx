'use client';
import {useSearchParams} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import categories from '../data/categories';
import { footerOptions } from "../data/categories";
import {formatUrlHeaderCategory} from "@/utils/helpers";

const FinishModal = ({ isModalOpen, setIsModalOpen }) => {
    const [showInClass, setShowInClass] = useState(false);
    const searchParams = useSearchParams();
    const [themeChoice, setThemeChoice] = useState('');
    const [sectionContents, setSectionContents] = useState(Array(6).fill(''));
    const [footerChoice, setFooterChoice] = useState('');
    const [headerChoice, setHeaderChoice] = useState({});
    const [megamenuChoice, setMegamenuChoice] = useState(false);
    const [memberToolsChoice, setMemberToolsChoice] = useState(true);
    const modalBodyRef = useRef();


    useEffect(() => {
        if (isModalOpen) {
            // Wait for the next tick so the modal is rendered with display: block
            setTimeout(() => setShowInClass(true), 0);
        } else {
            setShowInClass(false);
        }
    }, [isModalOpen]);


    useEffect(() => {

        // MemberTools
        const membertoolsParam = searchParams.get('membertools');
        // Update the toggle state only if the parameter exists and the user hasn't interacted
        if (membertoolsParam) {
            setMemberToolsChoice(false); // Set state explicitly
        } else {
            setMemberToolsChoice(true)
        }

        // Themes 
        const themeMap = {
            'square': { index: 0, label: 'Simple Square' },
            'round': { index: 1, label: 'Simple Round' },
            'angles': { index: 3, label: 'Angles' },
            'crisp': { index: 4, label: 'Crisp' },
        };

        const themeParam = searchParams.get('theme');
        if (themeParam && themeMap[themeParam]) {
            const { index, label } = themeMap[themeParam];
            setThemeChoice(`Theme ${index}: ${label}`);
        } else {
            setThemeChoice('');
        }

        //Headers
        const headerParam = searchParams.get('header');
        
        if (headerParam) {
            // Split the header parameter into category and item
            const [category, item] = headerParam.split('-');
            const formattedCat = formatUrlHeaderCategory(category);
            const formattedCatNoSpace = formattedCat.replace(/\s+/g, '');
            const mobileType = (`${formattedCatNoSpace.toLowerCase()}-${item.toLowerCase()}`);
            setHeaderChoice({ headerStyle: formattedCat, mobileType: mobileType});
        } else {
             setHeaderChoice({ headerStyle: '', mobileType: ''});
        }

        // MegaMenu
        const megamenuParam = searchParams.get('megamenu');
        // Update the toggle state only if the parameter exists and the user hasn't interacted
        if (megamenuParam) {
            setMegamenuChoice(true); // Set state explicitly
        } else {
            setMegamenuChoice(false)
        }


        // Sections
        const newContents = Array(6).fill('');
        searchParams.forEach((value, key) => {
            
            if (key.startsWith('section')) {
                const sectionNum = parseInt(key.replace('section', ''), 10) - 1;
                const sectionParam = searchParams.get(key);
                const [category, itemIndex] = [sectionParam.slice(0, -1), parseInt(sectionParam.slice(-1)) - 1];
                const matchedCategory = Object.keys(categories).find((catKey) =>
                    catKey.toLowerCase().includes(category)
                );

                if (!matchedCategory) return;

                const matchedItem = categories[matchedCategory][itemIndex];

                if (!matchedItem) return;
                
                newContents[sectionNum] = `${category}: ${matchedItem.label}`;
            }
        });
        setSectionContents(newContents);


        // Footer 
        const footerParam = searchParams.get('footer');

        if (footerParam) {
            const matchingOption = footerOptions.find(
            (option) => option.label.toLowerCase().replace(/\s+/g, '') === footerParam
            );
            if (matchingOption) {
                setFooterChoice(matchingOption.label);
            } else {
                setFooterChoice('');
            }
        }
    }, [searchParams]);




    const handleModalCloseClick = () => {
        setIsModalOpen(false);
    };

    const handleModalPrintClick = () => {
        	var domClone = document.getElementsByClassName('modal-body')[0].cloneNode(true);
            var modalContent = document.querySelector('.modal-content');
            var modalFooter = document.querySelector('.modal-footer');
			var $printSection = document.getElementsByClassName('modal-body')[0];
			
			//$printSection.innerHTML = '';
            $printSection.remove()
            modalContent.insertBefore(domClone, modalFooter);
			//$printSection.appendChild(domClone);
			window.print();
    }

    return ( 
        <div className={`modal fade ${showInClass ? 'in' : ''}`} id="finishModal" tabIndex="-1" role="dialog" aria-labelledby="Finish Modal" aria-hidden={isModalOpen ? 'false' : 'true'} style={{boxSizing: "border-box", display: isModalOpen ? "block": "none"}}>
            <div className={`modal-backdrop fade ${showInClass ? 'in' : 'out'}`}></div>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div style={{textAlign: 'center', width: '100%'}}>
                            <h5 className="modal-title" id="exampleModalLabel">
                                Your Selections:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <mark>&nbsp;Copy this information into your <strong>Blueprint Questionnaire.&nbsp;</strong></mark>
                            </h5>
                        </div>
                        <button type="button" className="close right" data-dismiss="modal" aria-label="Close" onClick={handleModalCloseClick}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div ref={modalBodyRef} className="modal-body">
                        <p><strong>DIRECTIONS: </strong>The row numbers in the left hand column correspond to the starting line numbers in in your Blueprint Questionnaire Excel Spreadsheet. You simply place the information in Column C from this diagram into Column C at their corresponding line numbers in the Blueprint Questionnaire Excel Spreadsheet. If not, you are unable to find each item, then select "Edit" from Excel's dropdown menu, and then "Find".</p>
                        <div className="handsontable" id="example">
                            <table className="htCore">
                                <colgroup>
                                    <col style={{width: "30px"}}/>
                                    <col style={{width: "50%"}}/>
                                    <col style={{width: "20px"}}/>
                                    <col style={{width: "50%"}}/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <td></td>
                                        <th><div className="relative"><span className="colHeader">A</span></div></th>
                                        <th><div className="relative"><span className="colHeader">...</span></div></th>
                                        <th><div className="relative"><span className="colHeader">C</span></div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">17</th>
                                        <td><strong>Theme Choice:</strong></td>
                                        <td></td>
                                        <td id="modalThemeChoice" className="modal-selections-js" data-name="theme">{themeChoice}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20</th>
                                        <td><strong>Header and Footer Layout Options:</strong></td>
                                        <td></td>
                                        <td>
                                            <div id="modalHeaderChoice" className="modal-selections-js" data-name="header">Header: {headerChoice.headerStyle === '' ? '' : headerChoice.headerStyle}</div>
                                            <div id="modalFooterChoice" className="modal-selections-js" data-name="footer">Footer: {footerChoice}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">22</th>
                                        <td><strong>MemberTools:</strong></td>
                                        <td></td>
                                        <td>
                                            <div id="modalHeaderChoice" className="modal-selections-js" data-name="header">Member Tools Bar: {String(memberToolsChoice) === "true" ? 'yes' : 'no'}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">23</th>
                                        <td><strong>Desktop Navigation Dropdown Options:</strong></td>
                                        <td></td>
                                        <td id="modalDropDownChoice" className="modal-selections-js" data-name="dropdown">MegaMenu - {String(megamenuChoice) === "true" ? 'yes' : 'no'}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">25</th>
                                        <td><strong>Tablet/Mobile Menu Choice:</strong></td>
                                        <td></td>
                                        <td id="modalMobileChoice" className="modal-selections-js" data-name="mobile">Drawer Menu: {headerChoice.mobileType !== '' ? headerChoice.mobileType : ''}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><div>34</div></th>
                                        <td><strong>Home Page Layout Options:</strong></td>
                                        <td></td>
                                        <td>
                                            <div className="modal-section-1">
                                                <span>Section 1 Option: </span>
                                                <span id="modalSection1Choice" className="modal-selections-js" data-name="section1">{sectionContents[0]}</span>
                                            </div>
                                            <div className="modal-section-2">
                                                <span>Section 2 Option:&nbsp;</span>
                                                <span id="modalSection2Choice" className="modal-selections-js" data-name="section2">{sectionContents[1]}</span>
                                            </div>
                                            <div className="modal-section-3">
                                                <span>Section 3 Option:&nbsp;</span>
                                                <span id="modalSection3Choice" className="modal-selections-js" data-name="section3">{sectionContents[2]}</span>
                                            </div>
                                            <div className="modal-section-4">
                                                <span>Section 4 Option:&nbsp;</span>
                                                <span id="modalSection4Choice" className="modal-selections-js" data-name="section4">{sectionContents[3]}</span>
                                            </div>
                                            <div className="modal-section-5">
                                                <span>Section 5 Option:&nbsp;</span>
                                                <span id="modalSection5Choice" className="modal-selections-js" data-name="section5">{sectionContents[4]}</span>
                                            </div>
                                            <div className="modal-section-6">
                                                <span>Section 6 Option:&nbsp;</span>
                                                <span id="modalSection6Choice" className="modal-selections-js" data-name="section6">{sectionContents[5]}</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button  type="button" onClick={handleModalCloseClick} id="closeModal" className="close-modal">Done</button>
                        <button id="btnPrint" onClick={handleModalPrintClick} type="button" className="btn btn-default">Print</button>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default FinishModal;