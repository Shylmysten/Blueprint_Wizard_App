'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CenterFeatureRotator = () => {
    const slickRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const playButtonRef = useRef(null);
    const pauseButtonRef = useRef(null);

    useEffect(() => {
        const initializeSlick = () => {
            if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
                const rotator2 = slickRef.current;

                jQuery(rotator2).slick({
                    autoplay: true,
                    dots: true,
                    arrows: true,
                    infinite: true,
                    autoplaySpeed: 5000,	//length of slide before transition
                    speed: 600,				//length of transition
                    fade: true,
                    prevArrow: '<button type="button" class="fas fa-chevron-left prev" aria-label="View Previous Slide"></button>',
                    nextArrow: '<button type="button" class="fas fa-chevron-right next" aria-label="View Next Slide"></button>'
                });

                const rotator2PlayBtn = playButtonRef.current;
                const rotator2PauseBtn = pauseButtonRef.current;
                rotator2PauseBtn.addEventListener('click',function(e) {
                    e.preventDefault();
                    jQuery(rotator2PauseBtn).addClass('active');
                    jQuery(rotator2PlayBtn).removeClass('active');
                    jQuery(rotator2PlayBtn).removeAttr('disabled');
                    jQuery(rotator2PauseBtn).attr('disabled','disabled');
                    jQuery(rotator2).slick('slickPause');
                });
                
                rotator2PlayBtn.addEventListener('click',function(e) {
                    e.preventDefault();
                    jQuery(rotator2PauseBtn).removeClass('active');
                    jQuery(rotator2PlayBtn).addClass('active');
                    jQuery(rotator2PauseBtn).removeAttr('disabled');
                    jQuery(rotator2PlayBtn).attr('disabled','disabled');
                    jQuery(rotator2).slick('slickPlay');
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
        <div className="imageRotator imod-rotator-2 sectionRow" data-sectionname="rotator-2">
            <div className="sectionBkgdWrap">
                <div className="fullImg sectionBkgd" id="ContentMiddleLayoutImgRotator2">
                    <div className="snippetrow"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div id="ContentMiddleLayoutRotator2" runat="server" className="col-xs-12 emptyCheck">
                        <div className="controlsWrap">
                            <div className="playPauseBtn">
                                <a ref={playButtonRef} href="#" role="button" type="button" id="playBtn" className="controlsBtn active" aria-label="Play Slider" disabled="disabled"><i className="fas fa-play"></i></a>
                                <a ref={pauseButtonRef} href="#" role="button" type="button" id="pauseBtn" className="controlsBtn" aria-label="Pause Slider"><i className="fas fa-pause"></i></a>
                            </div>
                        </div>
                        <div ref={slickRef} className="slick-slide2">
                            <div className="slick-slide">
                                    <a href="#">
                                        <div className="sldimg" style={{backgroundImage: "url(/home-rotator1-1024x650.jpg)"}}>
                                            <Image 
                                                src="/home-rotator1-1024x650.jpg" 
                                                className="invisible" 
                                                alt="Two grads walking"
                                                width={1024}
                                                height={650}
                                                style={{ width: '100%'}}
                                            />
                                        </div>
                                        <div className="sldtxt">
                                            <div className="title">Congratulations New Graduates</div>
                                            <div className="preview">Pellentesque porta et lorem id lacinia. Nam malesuada nec tortor placerat pulvinar.</div>
                                        </div>
                                    </a>
                            </div>
                            <div className="slick-slide">
                                    <a href="#">
                                        <div className="sldimg" style={{backgroundImage: "url(/home-rotator2-1024x650.jpg)"}}>
                                            <Image 
                                                src="/home-rotator2-1024x650.jpg" 
                                                className="invisible" 
                                                alt="Campus Building"
                                                width={1024}
                                                height={650}
                                                style={{ width: '100%'}}  
                                            />
                                        </div>
                                        <div className="sldtxt">
                                            <div className="title">Campus Tours Available</div>
                                            <div className="preview">Pellentesque porta et lorem id lacinia. Nam malesuada nec tortor placerat pulvinar.</div>
                                        </div>
                                </a>
                            </div>
                            <div className="slick-slide">
                                    <a href="#">
                                        <div className="sldimg" style={{backgroundImage: "url(/home-rotator3-1024x650.jpg)"}}>
                                                <Image 
                                                    src="/home-rotator3-1024x650.jpg" 
                                                    className="invisible" 
                                                    alt="Three students walking"
                                                    width={1024}
                                                    height={650}
                                                    style={{ width: '100%'}} 
                                                />
                                            </div>
                                <div className="sldtxt">
                                    <div className="title">Slide Title</div>
                                    <div className="preview">Pellentesque porta et lorem id lacinia. Nam malesuada nec tortor placerat pulvinar.</div>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CenterFeatureRotator;