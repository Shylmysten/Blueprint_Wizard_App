import {useEffect, useRef, useState} from "react";
import { formatDate } from "../../utils/helpers";

const CountDownTimerOne = () => {
    const countDownRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);

    

    const { startDate, endDate, getReadableEndDate} = formatDate();
    

    useEffect(() => {
    
        const initializeCircularCountdown = () => {
            if (typeof window.$ !== 'undefined' && typeof window.$.fn.circularCountdown !== 'undefined') {
                const countdown = countDownRef.current;


                const sectionName = countdown.closest('.body-section').id;


                jQuery(countdown).circularCountdown({
                    startDate: jQuery(countdown).data('start'),
                    endDate: jQuery(countdown).data('end'),
                    timeZone: jQuery(countdown).data('timezone'),	//Time zone of New York. Find timezone of your location and write here.
                    
                    //Margin between circles
                    margin:15,
                    
                    //Diameters
                    dayDiameter:110,
                    hourDiameter:110,
                    minuteDiameter:110,
                    secondDiameter:110,
                    
                    //Circle BG width
                    dayBgWidth:15,
                    hourBgWidth:15,
                    minuteBgWidth:15,
                    secondBgWidth:15,
                    
                    //Circle width
                    dayCircleWidth:15,
                    hourCircleWidth:15,
                    minuteCircleWidth:15,
                    secondCircleWidth:15,
                    
                    //Circle BG color
                    dayBgColor:'#abacb1',
                    hourBgColor:'#abacb1',
                    minuteBgColor:'#abacb1',
                    secondBgColor:'#abacb1',
                    
                    //Circle color
                    dayCircleColor: sectionName.includes('3') ? '#d37507' : '#000',
                    hourCircleColor: sectionName.includes('3') ? '#d37507' : '#000',
                    minuteCircleColor: sectionName.includes('3') ? '#d37507' : '#000',
                    secondCircleColor: sectionName.includes('3') ? '#d37507' : '#000',
                    
                    //Text font size
                    dayTextFontSize:12,
                    hourTextFontSize:12,
                    minuteTextFontSize:12,
                    secondTextFontSize:12,
                    
                    //Counter font color
                    dayCounterFontColor: sectionName.includes('3') ? '#fff' : '#000',
                    hourCounterFontColor: sectionName.includes('3') ? '#fff' : '#000',
                    minuteCounterFontColor: sectionName.includes('3') ? '#fff' : '#000',
                    secondCounterFontColor: sectionName.includes('3') ? '#fff' : '#000',
                    
                    //Text font color
                    dayTextFontColor: sectionName.includes('3') ? '#fff' : '#000',
                    hourTextFontColor: sectionName.includes('3') ? '#fff' : '#000',
                    minuteTextFontColor: sectionName.includes('3') ? '#fff' : '#000',
                    secondTextFontColor: sectionName.includes('3') ? '#fff' : '#000',
                    
                    //Texts top margin
                    dayTextMarginTop:3,
                    hourTextMarginTop:3,
                    minuteTextMarginTop:3,
                    secondTextMarginTop:3
                });

                // Mark as initialized
                setIsInitialized(true);
            } else {
                console.error('jQuery or Circular Countdown is not loaded');
            }
        };

        if (!isInitialized) {
            // Wait for jQuery and CircularCountdown to load
            const interval = setInterval(() => {
                if (typeof window.$ !== 'undefined' && typeof window.$.fn.circularCountdown !== 'undefined') {
                    clearInterval(interval);
                    initializeCircularCountdown();
                }
            }, 100);

            return () => clearInterval(interval);
        }
        
    },[isInitialized])


    return ( 
        <section className="imod-countdown-1 sectionRow" data-sectionname="countdown-1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 sectionHeader emptyCheck" id="ContentMiddleLayoutCtDn1Hdr" runat="server">
                        <h2>Day of Giving Countdown Clock</h2>
                        <h3>Get Ready for {getReadableEndDate}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 sectionContent emptyCheck" id="ContentMiddleLayoutCtDn1" runat="server">
                        <div ref={countDownRef} className="countdownWidget" data-start={startDate} data-end={endDate} data-timezone="-5">&nbsp;</div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default CountDownTimerOne;