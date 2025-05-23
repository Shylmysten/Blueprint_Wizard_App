'use client';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const FinishModal = ({ isModalOpen, setIsModalOpen }) => {
    const [showInClass, setShowInClass] = useState(false);
    const router = useRouter();

    
    useEffect(() => {
        if (isModalOpen) {
            // Wait for the next tick so the modal is rendered with display: block
            setTimeout(() => setShowInClass(true), 0);
        } else {
            setShowInClass(false);
        }
    }, [isModalOpen]);




    const handleModalCloseClick = () => {
        setIsModalOpen(false);
    };

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
                    <div className="modal-body">
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
                                        <th>17</th>
                                        <td><strong>Theme Choice:</strong></td>
                                        <td></td>
                                        <td id="modalThemeChoice" className="modal-selections-js" data-name="theme">Theme 1: Simple Round</td>
                                    </tr>
                                    <tr>
                                        <th>20</th>
                                        <td><strong>Header and Footer Layout Options:</strong></td>
                                        <td></td>
                                        <td>
                                            <div id="modalHeaderChoice" className="modal-selections-js" data-name="header">Header: Header 1</div>
                                            <div id="modalFooterChoice" className="modal-selections-js" data-name="footer">Footer: Footer 1</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>23</th>
                                        <td><strong>Desktop Navigation Dropdown Options:</strong></td>
                                        <td></td>
                                        <td id="modalDropDownChoice" className="modal-selections-js" data-name="dropdown">Drawer - Option 1</td>
                                    </tr>
                                    <tr>
                                        <th>25</th>
                                        <td><strong>Tablet/Mobile Menu Choice:</strong></td>
                                        <td></td>
                                        <td id="modalMobileChoice" className="modal-selections-js" data-name="mobile">Drawer Menu: header1-drawer</td>
                                    </tr>
                                    <tr>
                                        <th><div>34</div></th>
                                        <td><strong>Home Page Layout Options:</strong></td>
                                        <td></td>
                                        <td>
                                            <div className="modal-section-1">
                                                <span>Section 1 Option: </span>
                                                <span id="modalSection1Choice" className="modal-selections-js" data-name="section1">rotator : Full Width Hero Rotator</span>
                                            </div>
                                            <div className="modal-section-2">
                                                <span>Section 2 Option:&nbsp;</span>
                                                <span id="modalSection2Choice" className="modal-selections-js" data-name="section2">news: News Pattern 1</span>
                                            </div>
                                            <div className="modal-section-3">
                                                <span>Section 3 Option:&nbsp;</span>
                                                <span id="modalSection3Choice" className="modal-selections-js" data-name="section3">text: Text Pattern 1</span>
                                            </div>
                                            <div className="modal-section-4">
                                                <span>Section 4 Option:&nbsp;</span>
                                                <span id="modalSection4Choice" className="modal-selections-js" data-name="section4">events: Events Pattern 3</span>
                                            </div>
                                            <div className="modal-section-5">
                                                <span>Section 5 Option:&nbsp;</span>
                                                <span id="modalSection5Choice" className="modal-selections-js" data-name="section5">quotes: Quotes Pattern 1</span>
                                            </div>
                                            <div className="modal-section-6">
                                                <span>Section 6 Option:&nbsp;</span>
                                                <span id="modalSection5Choice" className="modal-selections-js" data-name="section6">quicklinks: Quicklinks Pattern 1</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleModalCloseClick} id="closeModal" className="close-modal">Done</button>
                        <button id="btnPrint" type="button" className="btn btn-default">Print</button>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default FinishModal;