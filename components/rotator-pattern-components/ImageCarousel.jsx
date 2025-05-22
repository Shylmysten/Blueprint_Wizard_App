'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ImageCarousel = () => {
    const carouselRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initializeSlick = () => {
            if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
                const carousel = carouselRef.current;

                jQuery(carousel).slick({
                    autoplay: false,
                    infinite: true,
                    prevArrow: '<button type="button" class="fa fa-chevron-left prev"><span class="sr-only">Previous</span></button>',
                    nextArrow: '<button type="button" class="fa fa-chevron-right next"><span class="sr-only">Next</span></button>',
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    responsive: [
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 4,
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

        if(!isInitialized) {
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
        <section className="imod-carousel-1 sectionRow" data-sectionname="carousel-1">
            <div className="sectionBkgdWrap">
                <div className="fullImg sectionBkgd" id="ContentMiddleLayoutImgCrsl1" runat="server">
                        <div className="snippetrow"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 sectionContent emptyCheck" id="ContentMiddleLayoutCarousel1" runat="server">
                        <div ref={carouselRef} className="slideItemWrapper">
                            <div className="col-xs-12 col-sm-2 slideItem">
                                <div className="thumb">
                                    <a href="#">
                                        <Image 
                                            src="/home-cpi1.jpg" 
                                            alt="Five students sitting on a bench smiling"
                                            width={700}
                                            height={450}
                                            style={{ width: '100%'}}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 slideItem">
                                <div className="thumb">
                                    <a href="#">
                                        <img 
                                            src="/home-cpi2.jpg" 
                                            alt="Campus hall"
                                            width={700}
                                            height={450}
                                            style={{ width: '100%'}}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 slideItem">
                                <div className="thumb">
                                    <a href="#">
                                        <img 
                                            src="/home-cpi3.jpg" 
                                            alt="Two ballet dancers"
                                            width={700}
                                            height={450}
                                            style={{ width: '100%'}}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 slideItem">
                                <div className="thumb">
                                    <a href="#">
                                        <img 
                                            src="/home-cpi4.jpg" 
                                            alt="Two students studying chemistry"
                                            width={700}
                                            height={450}
                                            style={{ width: '100%'}}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 slideItem">
                                <div className="thumb">
                                    <a href="#">
                                        <img 
                                            src="/home-cpi5.jpg" 
                                            alt="Girl smiling at laptop computer"
                                            width={700}
                                            height={450}
                                            style={{ width: '100%'}}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 slideItem">
                                <div className="thumb">
                                    <a href="#">
                                        <img 
                                            src="/home-cpi6.jpg" 
                                            alt="Campus lecture hall"
                                            width={700}
                                            height={450}
                                            style={{ width: '100%'}}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 slideItem">
                                <div className="thumb">
                                    <a href="#">
                                        <img 
                                            src="/home-cpi7.jpg" 
                                            alt="Class in session"
                                            width={700}
                                            height={450}
                                            style={{ width: '100%'}}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default ImageCarousel;