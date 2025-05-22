import {useEffect, useRef, useState} from "react";

const QuickLinksPatternOne = () => {
    const quicklinksRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);
   

    useEffect(() => {

        const initializeSlick = () => {
            if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
                const quicklinks = quicklinksRef.current;

                jQuery(quicklinks).slick({
                    infinite: true,
                    prevArrow: '<button class="slick-arrow slick-prev fa fa-chevron-left" type="button"><span class="sr-only">Previous</span></button>',
                    nextArrow: '<button class="slick-arrow slick-next fa fa-chevron-right" type="button"><span class="sr-only">Next</span></button>',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    responsive: [
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                        }
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
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
        <section className="imod-quicklinks-1 sectionRow" data-sectionname="quicklinks-1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 sectionContent emptyCheck" id="ContentMiddleLayoutQuickLinks1" runat="server">
                        <div ref={quicklinksRef} className="quicklinksWrapper">
                            <div className="col-xs-12 col-sm-2 icon">
                                <div className="iconInner">
                                    <a href="#"><span className="fa fa-university" aria-hidden="true"></span><br/>
                                    <h2>Topic #1</h2></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 icon">
                                <div className="iconInner">
                                    <a href="#"><span className="fa fa-bicycle" aria-hidden="true"></span><br/>
                                    <h2>Topic #2</h2></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 icon">
                                <div className="iconInner">
                                    <a href="#"><span className="fa fa-bullhorn" aria-hidden="true"></span><br/>
                                    <h2>Topic #3</h2></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 icon">
                                <div className="iconInner">
                                    <a href="#"><span className="fa fa-bell" aria-hidden="true"></span><br/>
                                    <h2>Topic #4</h2></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 icon">
                                <div className="iconInner">
                                    <a href="#"><span className="fa fa-briefcase" aria-hidden="true"></span><br/>
                                    <h2>Topic #5</h2></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 icon">
                                <div className="iconInner">
                                    <a href="#"><span className="fa fa-heart" aria-hidden="true"></span><br/>
                                    <h2>Topic #6</h2></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 icon">
                                <div className="iconInner">
                                    <a href="#"><span className="fa fa-envelope-o" aria-hidden="true"></span><br/>
                                    <h2>Topic #7</h2></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 icon">
                                <div className="iconInner">
                                    <a href="#"><span className="fa fa-home" aria-hidden="true"></span><br/>
                                    <h2>Topic #8</h2></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 icon">
                                <div className="iconInner">
                                    <a href="#"><span className="fa fa-graduation-cap" aria-hidden="true"></span><br/>
                                    <h2>Topic #9</h2></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default QuickLinksPatternOne;