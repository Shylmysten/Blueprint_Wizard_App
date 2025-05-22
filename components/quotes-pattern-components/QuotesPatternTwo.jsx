import Image from "next/image";
import {useEffect, useRef, useState} from "react";

const QuotesPatternTwo = () => {
    const quoteItemRef = useRef(null);
    const quoteNavRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        const initializeSlick= () => {
            if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
                const quoteItem = quoteItemRef.current;
                const quoteNav = quoteNavRef.current;
                const sectionName = `#${jQuery(quoteNav).closest('.body-section').attr('id')}`;

                jQuery(quoteItem).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: sectionName +' .quote-nav',
                    autoplay: false
                });

                jQuery(quoteNav).slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: sectionName +' .quote-for',
                    dots: false,
                    centerMode: true,
                    focusOnSelect: true,
                    arrows:false,
                    responsive: [
                        {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            //infinite: true,
                            dots: false,
                            arrows: false
                        }
                        }
                    ]
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

    }, [isInitialized])

    return ( 
        <section className="imod-quotes-2 sectionRow" data-sectionname="quotes-2">

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-10 col-sm-push-1 col-md-10 col-md-push-1 sectionContent emptyCheck" id="ContentMiddleLayoutQuote2" runat="server">
                        <div className="quoteSlider">
                            <div ref={quoteItemRef} className="quote-for">
                                <div className="quoteItem quoteItem-for col-md-12">
                                    <div className="main">
                                        <div className="preview">Quisque in enim non leo laoreet luctus. Laoreet est vehicula ac. Phasellus congue libero eu diam pellentesque consectetur.</div>
                                    </div>
                                </div>
                                <div className="quoteItem quoteItem-for col-md-12">
                                    <div className="main">
                                        <div className="preview">Quisque in enim non leo laoreet luctus. Phasellus congue libero eu diam pellentesque consectetur.</div>
                                    </div>
                                </div>
                                <div className="quoteItem quoteItem-for col-md-12">
                                    <div className="main">
                                        <div className="preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non feugiat lorem. Suspendisse neque libero, blandit dignissim dapibus eu, semper nec libero.</div>
                                    </div>
                                </div>
                            </div>
                            <div ref={quoteNavRef} className="quote-nav">
                                <div className="quoteItem quoteItem-nav col-md-4">
                                    <div className="navItem">
                                        <div className="thumb" style={{backgroundImage:'url(/interior-square3.jpg)'}}>
                                            <Image 
                                                src="/interior-square3.jpg" 
                                                alt=""
                                                width={500}
                                                height={500}
                                                style={{width: "100%"}}
                                            />
                                        </div>
                                        <div className="title">Harley Quinn</div>
                                    </div>
                                </div>
                                <div className="quoteItem quoteItem-nav col-md-4">
                                    <div className="navItem">
                                        <div className="thumb" style={{backgroundImage:'url(/interior-square2.jpg)'}}>
                                            <Image 
                                                src="/interior-square2.jpg" 
                                                alt=""
                                                width={500}
                                                height={500}
                                                style={{width: '100%'}}
                                            />
                                        </div>
                                        <div className="title">Bruce Wayne</div>
                                    </div>
                                </div>
                                <div className="quoteItem quoteItem-nav col-md-4">
                                    <div className="navItem">
                                        <div className="thumb" style={{backgroundImage:'url(/interior-square1.jpg)'}}>
                                        <Image 
                                            src="/interior-square1.jpg" 
                                            alt=""
                                            width={500}
                                            height={500}
                                            style={{width: '100%'}}
                                        />                              
                                        </div>
                                        <div className="title">Clark Kent</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default QuotesPatternTwo;