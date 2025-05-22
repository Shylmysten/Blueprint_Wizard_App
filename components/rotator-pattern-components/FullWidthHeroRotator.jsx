'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FullWidthHeroRotator = () => {
    const slickRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const playButtonRef = useRef(null);
    const pauseButtonRef = useRef(null);

    useEffect(() => {
        const initializeSlick = () => {
          if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
            const rotator = slickRef.current;

            jQuery(rotator).slick({
              autoplay: true,
              dots: true,
              arrows: true,
              infinite: true,
              autoplaySpeed: 5000, // length of slide before transition
              speed: 600, // length of transition
              fade: true,
              prevArrow: '<button type="button" class="fas fa-chevron-left prev" aria-label="View Previous Slide"></button>',
              nextArrow: '<button type="button" class="fas fa-chevron-right next" aria-label="View Next Slide"></button>',
            });
      
            const rotator1PlayBtn = playButtonRef.current;
            const rotator1PauseBtn = pauseButtonRef.current;
      
            rotator1PauseBtn.addEventListener('click', function (e) {
              e.preventDefault();
              jQuery(rotator1PlayBtn).removeClass('active');
              jQuery(rotator1PauseBtn).addClass('active');
              jQuery(rotator1PauseBtn).removeAttr('disabled');
              jQuery(rotator1PlayBtn).attr('disabled', 'true');
              jQuery(rotator).slick('slickPause');
            });
      
            rotator1PlayBtn.addEventListener('click', function (e) {
              e.preventDefault();
              jQuery(rotator1PauseBtn).removeClass('active');
              jQuery(rotator1PlayBtn).addClass('active');
              jQuery(rotator1PauseBtn).removeAttr('disabled');
              jQuery(rotator1PlayBtn).attr('disabled', 'true');
              jQuery(rotator).slick('slickPlay');
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
      
    }, [isInitialized]);


    return ( 
        <div className="imageRotator imod-rotator-1 sectionRow" data-sectionname="rotator-1">
            <div className="emptyCheck" id="ContentMiddleLayoutRotator1" runat="server">
                <div ref={slickRef} className="slick-slide1">
                    <div className="slick-slide">
                        <div className="tools"></div>
                        <a href="#">
                            <div className="sldimg" style={{backgroundImage: 'url(/home-rotator3-1700x850.jpg)'}}>
                                <Image 
                                    src="/home-rotator3-1700x850.jpg" 
                                    alt=""
                                    width={1700}
                                    height={850}
                                    style={{ width: '100%'}}
                                />
                            </div>
                            <div className="gradientOverlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="sldtxt">
                                        <div className="title">Campus Tours Available</div>
                                        <div className="preview">Pellentesque porta et lorem id lacinia. Nam malesuada nec tortor
                                            placerat pulvinar.</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="slick-slide">
                        <div className="tools"></div>
                        <a href="#">
                            <div className="sldimg" style={{backgroundImage: "url(/home-rotator4-1700x850.jpg)"}}>
                                <Image 
                                    src="/home-rotator4-1700x850.jpg" 
                                    alt=""
                                    width={1700}
                                    height={850}
                                    style={{ width: '100%'}}
                                />
                            </div>
                            <div className="gradientOverlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="sldtxt">
                                        <div className="title">Welcome new graduates</div>
                                        <div className="preview">Pellentesque porta et lorem id lacinia. Nam malesuada nec tortor
                                            placerat pulvinar. Nam malesuada nec tortor placerat pulvinar. Porta et lorem id
                                            lacinia.</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="controlsWrap">
                    <div className="playPauseBtn">
                        <a ref={playButtonRef} href="#" role="button" type="button" id="playBtn" className="controlsBtn active" aria-label="Play Slider" disabled="disabled"><i className="fas fa-play"></i></a>
                        <a ref={pauseButtonRef} href="#" role="button" type="button" id="pauseBtn" className="controlsBtn" aria-label="Pause Slider"><i className="fas fa-pause"></i></a>
                    </div>
                </div>

            </div>
        </div>    
    );
}
 
export default FullWidthHeroRotator;