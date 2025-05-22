import Image from "next/image";
import {useEffect, useRef, useState} from "react";

const QuotesPatternOne = () => {
    const quotesRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initializeSlick= () => {
            if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
                const quotes = quotesRef.current;

                jQuery(quotes).slick({
                    autoplay: false,
                    dots: false,
                    arrows: true,
                    infinite: true,
                    speed: 600,
                    autoplaySpeed: 10000,
                    prevArrow: '<button type="button" class="fa fa-chevron-left prev" aria-label="View Previous Quote"></button>',
                    nextArrow: '<button type="button" class="fa fa-chevron-right next" aria-label="View Next Quote"></button>'
                });
                
                // Mark as initialized
                setIsInitialized(true);
            
            } else {
              console.error('jQuery or Slick is not loaded');
            }
        };


        if (!isInitialized) {

            // Wait for jQuery and Slick to load
            const interval = setInterval(() => {
                if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
                    clearInterval(interval);
                    initializeSlick();
                }
            }, 100);
        
            return () => clearInterval(interval);
        }
    },[isInitialized])


    return ( 
        <section className="imod-quotes-1 sectionRow" data-sectionname="quotes-1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 sectionContent emptyCheck" id="ContentMiddleLayoutQuote1" runat="server">
                        <div ref={quotesRef} className="quotesWrapper">
                            <div className="quoteItem hasThumb">
                                <div className="tools"></div>
                                <a href="#">
                                    <div className="thumb" style={{backgroundImage:'url(/interior-square1.jpg)'}}>
                                        <Image 
                                            src="/interior-square1.jpg" 
                                            alt=""
                                            width={500}
                                            height={500}
                                            style={{width: '100%'}}
                                        />
                                    </div>
                                    <div className="text">
                                        <div className="preview">Quisque in enim non leo laoreet luctus. Nunc volutpat purus ante, ut laoreet est vehicula ac. Phasellus congue libero eu diam pellentesque consectetur.</div>
                                        <div className="title">- Student Name, Class of 2008</div>
                                    </div>
                                </a>
                            </div>
                            <div className="quoteItem">
                                <div className="tools"></div>
                                <div className="text">
                                    <div className="preview">Quisque in enim non leo laoreet luctus. Nunc volutpat purus ante, ut laoreet est vehicula ac. Phasellus congue libero eu diam pellentesque consectetur.</div>
                                    <div className="title">- Student Name, Class of 2008</div>
                                </div>
                            </div>
                            <div className="quoteItem hasThumb">
                                <div className="tools"></div>
                                <a href="#">
                                    <div className="thumb" style={{backgroundImage:'url(/interior-square3.jpg)'}}>
                                        <img 
                                            src="/interior-square3.jpg" 
                                            alt=""
                                            width={500}
                                            height={500}
                                            style={{width: '100%'}}
                                        />
                                    </div>
                                    <div className="text">
                                        <div className="preview">Quisque in enim non leo laoreet luctus. Nunc volutpat purus ante, ut laoreet est vehicula ac. Phasellus congue libero eu diam pellentesque consectetur. Quisque in enim non leo laoreet luctus. Nunc volutpat purus ante, ut laoreet est vehicula ac. </div>
                                        <div className="title">- Student Name, Class of 2008</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default QuotesPatternOne;