import { useEffect, useRef, useState } from "react";
import { getDate30DaysFromToday, formatDate } from "../../utils/helpers";

const CountDownTimerTwo = () => {
    const countDownRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [readableDate, setReadableDate] = useState(null);
    const [endTime, setEndTime] = useState(null);

    // Initialize date values on the client side only
    useEffect(() => {
        const futureDate = getDate30DaysFromToday();
        const { getReadableEndDate } = formatDate();
        setEndTime(futureDate);
        setReadableDate(getReadableEndDate);
    }, []);

    useEffect(() => {
        if (!endTime) return; // Don't initialize until dates are set

        const initializeFinalCountdown = () => {
            
            if (typeof window.$ !== 'undefined' && typeof window.$.fn.countdownInit !== 'undefined') {
                const countdown = countDownRef.current;
                const sectionName = countdown.closest('.body-section').id;
                jQuery(`#${sectionName} .countdownWidget2`).countdownInit(jQuery(`#${sectionName} .countdownWidget2`).data('endtime'),
                    {
                        //updateAsync: false,
                        //hoursWrap: '',
                        //totalHoursWrap: '.hours .val',
                        addLeadingZero: true,
                        initialized: function(){console.log('countdown init');},
                        countdownComplete: function(){
                            console.log('countdown complete');j
                            jQuery(`#${sectionName} .countdownWidget2 .unit .val`).text('00');
                        }
                    });
                    
                    // Mark as initialized
                    setIsInitialized(true);

                } else {
                    console.error('jQuery or Countdown is not loaded');
                }
        }

        if (!isInitialized) {

            // Wait for jQuery and FinalCountdown to load
            const interval = setInterval(() => {
                if (typeof window.$ !== 'undefined' && typeof window.$.fn.countdownInit !== 'undefined') {
                    clearInterval(interval);
                    initializeFinalCountdown();
                }
            }, 100);
            
            return () => clearInterval(interval);
        }

    }, [isInitialized, endTime])

  // Don't render dynamic content until client-side hydration
    if (!readableDate || !endTime) {
        return (
            <section className="imod-countdown-2 sectionRow" data-sectionname="countdown-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 sectionHeader emptyCheck" id="ContentMiddleLayoutCtDn2Hdr" runat="server">
                            <h2>Day of Giving Countdown</h2>
                            <h3>Loading...</h3>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 sectionContent emptyCheck" id="ContentMiddleLayoutCtDn2" runat="server">
                            <div ref={countDownRef} className="counter countdownWidget2">
                                <div className="unit">
                                    <div className="unitInner">
                                        <span className="days val"></span>
                                        <div className="label">Days</div>
                                    </div>
                                </div>
                                <div className="unit">
                                    <div className="unitInner">
                                        <span className="hours val"></span>
                                        <div className="label">Hours</div>
                                    </div>
                                </div>
                                <div className="unit">
                                    <div className="unitInner">
                                        <span className="minutes val"></span>
                                        <div className="label">Minutes</div>
                                    </div>
                                </div>
                                <div className="unit">
                                    <div className="unitInner">
                                        <span className="seconds val"></span>
                                        <div className="label">Seconds</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return ( 
        <section className="imod-countdown-2 sectionRow" data-sectionname="countdown-2">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 sectionHeader emptyCheck" id="ContentMiddleLayoutCtDn2Hdr" runat="server">
                        <h2>Get Ready for {readableDate}</h2>
                        <h3>Day of Giving Countdown</h3>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 sectionContent emptyCheck" id="ContentMiddleLayoutCtDn2" runat="server">
                        <div ref={countDownRef} className="counter countdownWidget2" data-endtime={endTime}>
                            <div className="unit">
                                <div className="unitInner">
                                    <span className="days val"></span>
                                    <div className="label">Days</div>
                                </div>
                            </div>
                            <div className="unit">
                                <div className="unitInner">
                                    <span className="hours val"></span>
                                    <div className="label">Hours</div>
                                </div>
                            </div>
                            <div className="unit">
                                <div className="unitInner">
                                    <span className="minutes val"></span>
                                    <div className="label">Minutes</div>
                                </div>
                            </div>
                            <div className="unit">
                                <div className="unitInner">
                                    <span className="seconds val"></span>
                                    <div className="label">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default CountDownTimerTwo;