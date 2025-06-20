'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import categories from '@/data/categories'; // Home categories
import { intCategories } from '@/data/categories'; // Interior categories
import { footerOptions } from "@/data/categories";
import { formatUrlHeaderCategory } from "@/utils/helpers";

const FinishModal = ({ isModalOpen, setIsModalOpen }) => {
    const [showInClass, setShowInClass] = useState(false);
    const searchParams = useSearchParams();
    const [homeSelections, setHomeSelections] = useState({});
    const [interiorSelection, setInteriorSelection] = useState(''); // Only one for interior
    const modalBodyRef = useRef();

    // Animation effect for modal open
    useEffect(() => {
        if (isModalOpen) {
            setTimeout(() => setShowInClass(true), 0);
        } else {
            setShowInClass(false);
        }
    }, [isModalOpen]);

    // Helper to parse params into formatted selections (header, footer, theme, sections)
    const parseSelections = (params, categoriesForSections) => {
        // ...same as before for Home...
        const membertoolsParam = params.get('membertools');
        const memberToolsChoice = membertoolsParam ? false : true;

        const themeMap = {
            'square': { index: 0, label: 'Simple Square' },
            'round': { index: 1, label: 'Simple Round' },
            'angles': { index: 3, label: 'Angles' },
            'crisp': { index: 4, label: 'Crisp' },
        };
        const themeParam = params.get('theme');
        let themeChoice = '';
        if (themeParam && themeMap[themeParam]) {
            const { index, label } = themeMap[themeParam];
            themeChoice = `Theme ${index}: ${label}`;
        }

        const headerParam = params.get('header');
        let headerChoice = { headerStyle: '', mobileType: '' };
        if (headerParam) {
            const [category, item] = headerParam.split('-');
            const formattedCat = formatUrlHeaderCategory(category);
            const formattedCatNoSpace = formattedCat.replace(/\s+/g, '');
            const mobileType = (`${formattedCatNoSpace.toLowerCase()}-${item.toLowerCase()}`);
            headerChoice = { headerStyle: formattedCat, mobileType: mobileType };
        }

        const megamenuParam = params.get('megamenu');
        const megamenuChoice = !!megamenuParam;

        const newContents = Array(6).fill('');
        params.forEach((value, key) => {
            if (key.startsWith('section')) {
                const sectionNum = parseInt(key.replace('section', ''), 10) - 1;
                const sectionParam = params.get(key);
                if (!sectionParam) return;
                let category = '';
                let itemIndex = -1;
                let matchedCategory = '';
                let matchedItem = undefined;

                if (sectionParam.match(/[a-zA-Z]+[0-9]+$/)) {
                    category = sectionParam.slice(0, -1);
                    itemIndex = parseInt(sectionParam.slice(-1)) - 1;
                    matchedCategory = Object.keys(categoriesForSections).find((catKey) =>
                        catKey.toLowerCase().includes(category)
                    );
                    if (matchedCategory) {
                        matchedItem = categoriesForSections[matchedCategory][itemIndex];
                        if (matchedItem) {
                            newContents[sectionNum] = `${category}: ${matchedItem.label}`;
                        }
                    }
                }
            }
        });

        const footerParam = params.get('footer');
        let footerChoice = '';
        if (footerParam) {
            const matchingOption = footerOptions.find(
                (option) => option.label.toLowerCase().replace(/\s+/g, '') === footerParam
            );
            if (matchingOption) {
                footerChoice = matchingOption.label;
            }
        }

        return {
            themeChoice,
            sectionContents: newContents,
            footerChoice,
            headerChoice,
            megamenuChoice,
            memberToolsChoice
        };
    };

    // Helper to parse the single interior section selection (mirroring InteriorSectionControl.jsx)
    const parseInteriorSection = (params, intCategoriesForSection) => {
        const sectionParam = params.get('section1');
        if (!sectionParam) return '';
        let category = '';
        if (sectionParam.includes('layout1')) {
            category = 'Layout Option 1';
        }
        if (sectionParam.includes('layout2')) {
            category = 'Layout Option 2';
        }
        if (sectionParam.includes('cf')) {
            category = 'CrowdFunding Layouts';
        }
        // Find the matching category key
        const matchedCategory = Object.keys(intCategoriesForSection).find((key) =>
            key.includes(category)
        );
        let matchedItem = undefined;
        if (matchedCategory && intCategoriesForSection[matchedCategory]) {
            matchedItem = intCategoriesForSection[matchedCategory].find(
                item => item.value.toString().toLowerCase() === sectionParam.toLowerCase()
            );
        }
        if (matchedCategory && matchedItem) {
            return `${matchedCategory}: ${matchedItem.label}`;
        }
        return '';
    };

    // Main effect to load both Home and Interior selections
    useEffect(() => {
        const homeParamsStr = sessionStorage.getItem('homePageParams');
        const intParamsStr = sessionStorage.getItem('interiorPageParams');
        let homeParams = homeParamsStr ? new URLSearchParams(homeParamsStr) : null;
        let intParams = intParamsStr ? new URLSearchParams(intParamsStr) : null;

        if (!searchParams.get('template')) {
            homeParams = searchParams;
        }
        if (searchParams.get('template') === 'int') {
            intParams = searchParams;
        }

        setHomeSelections(homeParams ? parseSelections(homeParams, categories) : {});
        setInteriorSelection(intParams ? parseInteriorSection(intParams, intCategories) : '');
    }, [searchParams, isModalOpen]);

    const handleModalCloseClick = () => setIsModalOpen(false);

    const handleModalPrintClick = () => {
        var domClone = document.getElementsByClassName('modal-body')[0].cloneNode(true);
        var modalContent = document.querySelector('.modal-content');
        var modalFooter = document.querySelector('.modal-footer');
        var $printSection = document.getElementsByClassName('modal-body')[0];
        $printSection.remove();
        modalContent.insertBefore(domClone, modalFooter);
        window.print();
    };

    return (
        <div className={`modal fade ${showInClass ? 'in' : ''}`} id="finishModal" tabIndex="-1" role="dialog" aria-labelledby="Finish Modal" aria-hidden={isModalOpen ? 'false' : 'true'} style={{ boxSizing: "border-box", display: isModalOpen ? "block" : "none" }}>
            <div className={`modal-backdrop fade ${showInClass ? 'in' : 'out'}`}></div>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div style={{ textAlign: 'center', width: '100%' }}>
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
                                    <col style={{ width: "30px" }} />
                                    <col style={{ width: "50%" }} />
                                    <col style={{ width: "20px" }} />
                                    <col style={{ width: "50%" }} />
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
                                    {/* Home Selections */}
                                    <tr>
                                        <th scope="row">17</th>
                                        <td><strong>Theme Choice (Home):</strong></td>
                                        <td></td>
                                        <td id="modalThemeChoice" className="modal-selections-js" data-name="theme">{homeSelections.themeChoice}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20</th>
                                        <td><strong>Header and Footer Layout Options (Home):</strong></td>
                                        <td></td>
                                        <td>
                                            <div id="modalHeaderChoice" className="modal-selections-js" data-name="header">Header: {homeSelections.headerChoice?.headerStyle}</div>
                                            <div id="modalFooterChoice" className="modal-selections-js" data-name="footer">Footer: {homeSelections.footerChoice}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">22</th>
                                        <td><strong>MemberTools (Home):</strong></td>
                                        <td></td>
                                        <td>
                                            <div id="modalHeaderChoice" className="modal-selections-js" data-name="header">Member Tools Bar: {homeSelections.memberToolsChoice === true ? 'yes' : 'no'}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">23</th>
                                        <td><strong>Desktop Navigation Dropdown Options (Home):</strong></td>
                                        <td></td>
                                        <td id="modalDropDownChoice" className="modal-selections-js" data-name="dropdown">MegaMenu - {homeSelections.megamenuChoice === true ? 'yes' : 'no'}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">25</th>
                                        <td><strong>Tablet/Mobile Menu Choice (Home):</strong></td>
                                        <td></td>
                                        <td id="modalMobileChoice" className="modal-selections-js" data-name="mobile">Drawer Menu: {homeSelections.headerChoice?.mobileType}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><div>34</div></th>
                                        <td><strong>Home Page Layout Options:</strong></td>
                                        <td></td>
                                        <td>
                                            {homeSelections.sectionContents && homeSelections.sectionContents.map((section, idx) => (
                                                <div key={idx} className={`modal-section-${idx + 1}`}>
                                                    <span>Section {idx + 1} Option: </span>
                                                    <span id={`modalSection${idx + 1}Choice`} className="modal-selections-js" data-name={`section${idx + 1}`}>{section}</span>
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                    {/* Interior Selections */}
                                    <tr>
                                        <th scope="row">40</th>
                                        <td><strong>Interior Page Layout Options:</strong></td>
                                        <td></td>
                                        <td>
                                            <div className="modal-section-int-1">
                                                <span>Interior Layout Option 1: </span>
                                                <span id="modalSectionInt1Choice" className="modal-selections-js" data-name="sectionInt1">{interiorSelection}</span>
                                            </div>
                                            <div className="modal-section-int-1">
                                                <span>Interior Layout Option 2: </span>
                                                <span id="modalSectionInt1Choice" className="modal-selections-js" data-name="sectionInt1"><strong>NOTE:</strong>You can select another layout option for your 2nd interior page in the Blueprint Wizard, but you'll need to write it into the Spreadsheet'</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleModalCloseClick} id="closeModal" className="close-modal">Done</button>
                        <button id="btnPrint" onClick={handleModalPrintClick} type="button" className="btn btn-default">Print</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinishModal;