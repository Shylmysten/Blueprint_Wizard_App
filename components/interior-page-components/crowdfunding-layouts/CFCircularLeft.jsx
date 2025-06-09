import Image from "next/image";
import {useEffect} from "react";

const CFCircularLeft = () => {
    useEffect(() => {
        // Define the handler so it can be referenced for removal
        const handleAccordionClick = function(e) {
            e.preventDefault();
            if(jQuery(this).attr('aria-expanded') == 'true') {
                jQuery(this).parent().parent().removeClass("open");
                jQuery(this).find('.fa').removeClass("fa-angle-up").addClass('fa-angle-down');
                jQuery(this).parent().next().slideUp();
                jQuery(this).attr('aria-expanded', 'false');
                jQuery(this).parent().next().attr('aria-expanded', 'false')
            } else {
                jQuery(this).parent().parent().addClass("open");
                jQuery(this).find('.fa').removeClass("fa-angle-down").addClass('fa-angle-up');
                jQuery(this).parent().next().slideDown();
                jQuery(this).attr('aria-expanded', 'true');
                jQuery(this).parent().next().attr('aria-expanded', 'true')
            }
        };

        // Attach the event listener
        jQuery(".accordion .collapseItem .accordionToggle").on('click', handleAccordionClick);

        // Cleanup: remove the event listener on unmount
        return () => {
            jQuery(".accordion .collapseItem .accordionToggle").off('click', handleAccordionClick);
        };
    })


    return ( 
        <section className="contentRow interior-type2 sidebar-left crowdfunding-interior" data-sectionname="interior-crowdfunding">
            <div className="container">

                {/*<!-- Two Col Interior Verison -->*/}
                <div className="row">
                    <section className="col-xs-12 col-sm-8 col-sm-push-4 midWrap">

                        <div id="ContentMiddleLayoutFtImg" runat="server" className="ftImg emptyCollapse-bottom">
                            <Image
                                border="0" 
                                src="/cf-project.jpg"
                                width={700}
                                height={300}
                                style={{maxWidth: '100%'}}
                                alt=''
                            />
                        </div>

                        <div id="ContentPageName" runat="server" className="pageName">
                            <h1>Smith Library Renovation</h1>
                        </div>

                        <div className="socialShareBar">
                            <img src="/social.png" alt=""/>
                        </div>


                        <div id="ContentMiddle" runat="server">

                            <p>Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. There are no mistakes. You can fix anything that happens. Remember how free clouds are.
                                They just lay around in the sky all day long. I guess that would be considered a UFO. A big cotton ball in the sky. Just let this happen. We just let this flow right out of our minds. It's a super day, so why not make a beautiful sky?</p>
                            <h2>Header Two</h2>
                            <p>You want your tree to have some character. Make it special. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow. Sometimes you learn more from your mistakes than you do from your masterpieces. Brown is such
                                a nice color. We don't need any guidelines or formats. All we need to do is just let it flow right out of us.</p>
                                <hr/>
                                <div id="calloutBox" className="patternsCallout">
                                    <i className="fa fa-puzzle-piece"></i>
                                    <p>Please choose four of the following six patterns to be built on your interior templates. Indicate your selections on the Blueprint questionnaire provided to you by your project manager.</p>
                                </div>
                                <hr/>
                                <div className="row">
                                    <section className="bp-preview-section interior-section col-xs-12" id="intSection1">
                                        <h2>Standard News [News Pattern]</h2>
                                
                                        <div className="newsItem">
                                            <a href="#">
                                                <div className="thumb" style={{backgroundImage:"url(/interior-square1.jpg)"}}>
                                                    <img src="/interior-square1.jpg" alt="Happy Graduate"/>
                                                </div>
                                                <div className="text">
                                                    <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                                    <div className="preview">Quisque in enim non leo laoreet luctus. Mauris rhoncus tortor non feugiat lobortis.
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="newsItem">
                                            <a href="#">
                                                <div className="text">
                                                    <div className="title">Mauris rhoncus tortor non feugiat lobortis</div>
                                                    <div className="preview">This one has no thumbnail Quisque in enim non leo laoreet luctus. Mauris rhoncus
                                                        tortor
                                                        non feugiat lobortis. Nunc
                                                        volutpat purus ante, ut laoreet est vehicula ac. Phasellus congue libero eu diam pellentesque
                                                        consectetur.
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="newsItem">
                                            <div className="thumb"
                                                style={{backgroundImage:"url(/interior-square2.jpg)"}}>
                                                <img src="/interior-square2.jpg" alt="Football Quarterback Passing"/>
                                            </div>
                                            <div className="text">
                                                <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                                <div className="preview">This example has no link. Quisque in enim non leo laoreet luctus. Mauris rhoncus tortor
                                                    non
                                                    feugiat lobortis. Nunc
                                                    volutpat purus ante, ut laoreet est vehicula ac. Phasellus congue libero eu diam pellentesque
                                                    consectetur.
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                    </section>
                                    <section className="bp-preview-section interior-section col-xs-12" id="intSection2">
                                        <h2>Standard Events [ Events Pattern ]</h2>
                                        <div className="eventItem withThumb">
                                            <div className="date">
                                                <div className="month">Oct</div>
                                                <div className="day">31</div>
                                            </div>
                                            <div className="thumb" style={{backgroundImage:"url(/interior-square3.jpg)"}}>
                                                <img src="/interior-square1.jpg" alt="Smiling Girl"/>
                                            </div>
                                            <div className="text">
                                                <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                                <div className="locationTime">
                                                    <div className="timeRange">6:00PM to 9:00PM</div>
                                                </div>
                                                <div className="preview">This one has no link or location. Quisque in enim non leo laoreet luctus.</div>
                                            </div>
                                        </div>
                                        <div className="eventItem">
                                            <div className="date">
                                                <div className="month">Oct</div>
                                                <div className="day">31</div>
                                            </div>
                                            <div className="text">
                                                <div className="title">
                                                    <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                                                </div>
                                                <div className="locationTime">
                                                    <div className="location">Location Name</div>
                                                    <div className="timeRange">6:00PM to 9:00PM</div>
                                                </div>
                                                <div className="preview">This one has no thumbnail. Quisque in enim non leo laoreet luctus. Mauris
                                                    rhoncus tortor non feugiat
                                                    lobortis. Nunc volutpat purus ante, ut laoreet est vehicula ac.
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                    </section>
                                    <section className="bp-preview-section interior-section col-xs-12" id="intSection3">
                                        <h2>Accordion [News Pattern]</h2>
                                                <div className="accordion panel-group" id="accordion1">
                                                    <div className="panelCollapse collapseItem">

                                                        <h3 className="panel-heading">
                                                            <button aria-expanded="false" role="button" className="accordionToggle collapsed" data-toggle="collapse" data-parent="#accordion1" data-target="#panel1" aria-controls="panel1">
                                                                <span className="arrows"><em className="fa fa-angle-down"></em></span>
                                                                <span className="accText" id="panelHeading1">Lorem Ipsum Title Number One</span>
                                                            </button>
                                                        </h3>

                                                        <div role="tabpanel" className="panel-collapse collapseItem collapse" id="panel1" aria-labelledby="panelHeading1" aria-expanded="false">
                                                            <div className="accordionPanelWrap panel-body">
                                                                <div className="preview">
                                                                    <div className="thumb">
                                                                        <Image
                                                                            width={500}
                                                                            height={500}
                                                                            src="/interior-square2.jpg" 
                                                                            alt="Football Quarterback Passing"
                                                                        />
                                                                    </div>
                                                                    This example has no link. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi nunc, porta nec ante nec, tincidunt
                                                                    dapibus.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panelCollapse collapseItem">

                                                        <h3 className="panel-heading">
                                                            <button aria-expanded="false" role="button" className="collapsed accordionToggle" data-toggle="collapse" data-parent="#accordion1" data-target="#panel2" aria-controls="panel2">
                                                                <span className="arrows">
                                                                    <em className="fa fa-angle-down"></em>
                                                                </span>
                                                                <span className="accText" id="panelHeading2">Lorem Ipsum Title Number Two</span>
                                                            </button>
                                                        </h3>

                                                        <div role="tabpanel" className="panel-collapse collapse collapseItem" id="panel2" aria-labelledby="panelHeading2" aria-expanded="false">
                                                            <div className="accordionPanelWrap panel-body">
                                                                <div className="preview">
                                                                    <div className="thumb">
                                                                        <a href="#">
                                                                        <Image 
                                                                            width={500}
                                                                            height={500}
                                                                            src="/interior-square3.jpg" 
                                                                            alt="Smiling Japanese Girl"
                                                                        />
                                                                        </a>
                                                                    </div>
                                                                    This example is linked. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi nunc, porta nec ante nec, tincidunt
                                                                    dapibus.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panelCollapse collapseItem">

                                                        <h3 className="panel-heading">
                                                            <button aria-expanded="false" role="button" className="collapsed accordionToggle" data-toggle="collapse" data-parent="#accordion1" data-target="#panel3" aria-controls="panel3">
                                                                <span className="arrows">
                                                                    <em className="fa fa-angle-down"></em>
                                                                </span>
                                                                <span className="accText" id="panelHeading3">Lorem Ipsum Title Number Three</span>
                                                            </button>
                                                        </h3>

                                                        <div role="tabpanel" className="panel-collapse collapse collapseItem" id="panel3" aria-labelledby="panelHeading3" aria-expanded="false">
                                                            <div className="accordionPanelWrap panel-body">
                                                                <div className="preview">

                                                                    This example has no thumbnail or link. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi nunc, porta nec ante nec, tincidunt
                                                                    dapibus.

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        <hr/>
                                    </section>
                                    <section className="bp-preview-section interior-section col-xs-12" id="intSection4">
                                        <section id="twoAcross">
                                            <div className="row">
                                                <div className="col-xs-12"><h2>2-Across [News Pattern]</h2></div>
                                                <div className="col-xs-12 col-sm-6 col-md-6 gridItem twoAcross">
                                                    <div className="gridInner">
                                                        <div className="tools"></div>
                                                        <a href="#">
                                                            <div className="thumb" style={{backgroundImage:"url(/interior-rect1.jpg)"}}>
                                                                <img src="/interior-rect1.jpg" alt="" className="invisible"/>
                                                            </div>
                                                            <div className="text">
                                                                <div className="title">Item Title Here</div>
                                                                <div className="preview">How do you make a round circle with a square knife? That's
                                                                    your challenge for the day. Maybe there's a happy little Evergreen that
                                                                    lives here. What the devil.
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6 gridItem twoAcross">
                                                    <div className="gridInner">
                                                        <div className="tools"></div>
                                                        <div className="thumb" style={{backgroundImage:"url(/interior-rect2.jpg)"}}>
                                                            <img src="/interior-rect2.jpg" alt="" className="invisible"/>
                                                        </div>
                                                        <div className="text">
                                                            <div className="title">Different Item Title Here</div>
                                                            <div className="preview">If we're going to have animals around we all have to be
                                                                concerned about them and take care of them. Let's put some happy trees and
                                                                bushes back in here. Isn't it great to do something you can't fail at?
                                                                Everything's not great in life, but we can still find beauty in it.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                        </section>
            
                                    </section>
                                    <section className="bp-preview-section interior-section col-xs-12" id="intSection5">
                                        <section id="threeAcross">
                                            <div className="row">
                                                <div className="col-xs-12"><h2>3-Across [News Pattern]</h2></div>
                                                <div className="col-xs-12 col-sm-4 col-md-4 gridItem threeAcross">
                                                    <div className="gridInner">
                                                        <div className="tools"></div>
                                                        <a href="#">
                                                            <div className="thumb" style={{backgroundImage:"url(/interior-rect1.jpg)"}}>
                                                                <img src="/interior-rect1.jpg" alt="" className="invisible"/>
                                                            </div>
                                                            <div className="text">
                                                                <div className="title">Item Title Here</div>
                                                                <div className="preview">How do you make a round circle with a square knife? That's
                                                                    your challenge for the day. Maybe there's a happy little Evergreen that
                                                                    lives here. What the devil.
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-4 col-md-4 gridItem threeAcross">
                                                    <div className="gridInner">
                                                        <div className="tools"></div>
                                                        <div className="thumb"
                                                            style={{backgroundImage:"url(/interior-rect2.jpg)"}}>
                                                            <img src="/interior-rect2.jpg" alt="" className="invisible"/>
                                                        </div>
                                                        <div className="text">
                                                            <div className="title">Different Item Title Here</div>
                                                            <div className="preview">If we're going to have animals around we all have to be
                                                                concerned about them and take care of them. Let's put some happy trees and
                                                                bushes back in here. Isn't it great to do something you can't fail at?
                                                                Everything's not great in life, but we can still find beauty in it.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-4 col-md-4 gridItem threeAcross">
                                                    <div className="gridInner">
                                                        <div className="tools"></div>
                                                        <a href="#">
                                                            <div className="thumb" style={{backgroundImage:"url(/interior-rect3.jpg)"}}>
                                                                <img src="/interior-rect3.jpg" alt="" className="invisible"/>
                                                            </div>
                                                            <div className="text">
                                                                <div className="title">A Longer, Different Item Title Here</div>
                                                                <div className="preview">We don't need any guidelines or formats. All we need to do
                                                                    is just let it flow right out of us. Don't fight it, use what happens. For
                                                                    the lack of a better word I call them hangy downs. Put it in, leave it
                                                                    alone.
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                        </section>
            
                                    </section>
                                    <section className="bp-preview-section interior-section col-xs-12" id="intSection6">
                                        <section id="fourAcross">
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <h2>4-Across [News Pattern]</h2>
                                                </div>
                                    
                                                <div className="col-xs-12 col-sm-6 col-md-3 gridItem fourAcross">
                                                    <div className="gridInner">
                                                        <div className="tools"></div>
                                                        <a href="#">
                                                            <div className="thumb" style={{backgroundImage:"url(/interior-rect1.jpg)"}}>
                                                                <img src="/interior-rect1.jpg"  alt="" className="invisible"/>
                                                            </div>
                                                            <div className="text">
                                                                <div className="title">Item Title Here</div>
                                                                <div className="preview">How do you make a round circle with a square knife? That's your
                                                                    challenge for the day. Maybe there's a happy little Evergreen that lives here. What the
                                                                    devil.
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-3 gridItem fourAcross">
                                                    <div className="gridInner">
                                                        <div className="tools"></div>
                                                        <div className="thumb" style={{backgroundImage:"url(/interior-rect2.jpg)"}}>
                                                            <img src="/interior-rect2.jpg" alt="" className="invisible"/>
                                                        </div>
                                                        <div className="text">
                                                            <div className="title">Different Item Title Here</div>
                                                            <div className="preview">If we're going to have animals around we all have to be concerned about
                                                                them and take care of them. Let's put some happy trees and bushes back in here. Isn't it
                                                                great to do something you can't fail at? Everything's not great in life, but we can still
                                                                find beauty in it.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-3 gridItem fourAcross">
                                                    <div className="gridInner">
                                                        <div className="tools"></div>
                                                        <a href="#">
                                                            <div className="thumb" style={{backgroundImage:"url(/interior-rect3.jpg)"}}>
                                                                <img src="/interior-rect3.jpg" alt="" className="invisible"/>
                                                            </div>
                                                            <div className="text">
                                                                <div className="title">A Longer, Different Item Title Here</div>
                                                                <div className="preview">We don't need any guidelines or formats. All we need to do is just let
                                                                    it flow right out of us. Don't fight it, use what happens. For the lack of a better word
                                                                    I call them hangy downs. Put it in, leave it alone.
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-3 gridItem fourAcross">
                                                    <div className="gridInner">
                                                        <div className="tools"></div>
                                                        <div className="thumb"
                                                            style={{backgroundImage:"url(/interior-rect4.jpg)"}}>
                                                            <img src="/interior-rect4.jpg" alt="" className="invisible"/>
                                                        </div>
                                                        <div className="text">
                                                            <div className="title">Different Item Title Here</div>
                                                            <div className="preview">It's a good way of getting rid of all your anxieties and hostilities. No
                                                                worries. No cares. Just float and wait for the wind to blow you around. Didn't you know you
                                                                had that much power? You can move mountains. You can do anything. It's hard to see things
                                                                when you're too close. Take a step back and look.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                    
                                            </div>
                                        </section>
                                    </section>
                                </div>


                        </div>
                    </section>

                    {/*<!-- SIDEBAR - LEFT -->*/}
                    <aside className="col-xs-12 col-sm-4 col-sm-pull-8 sideBar structLeft">
                        <div className="structLeftInner">
                            <div className="cpiProjectDetail" id="ContentMiddleLayoutStatsBox" runat="server">
                                <div className="imod-progWidget bubbleViz">
                                    <div className="data-viz">
                                        <div className="vizWrapper">
                                            <div className="bar">
                                                <div className="value">46%</div>
                                                <div style={{height:"46%"}} className="progressBar"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="extras">
                                        <div className="widgetStat amt-goal">
                                            <div className="widgetInner">
                                                <span className="value">$30,000</span><span className="label"> Goal</span>
                                            </div>
                                        </div>
                                        <div className="widgetStat amt-raised">
                                            <div className="widgetInner">
                                                <span className="value">$13,870</span><span className="label"> Raised</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="extras">
                                        <div className="widgetStat donors">
                                            <div className="widgetInner">
                                                <span className="value">609</span><span className="label"> Donors</span>
                                            </div>
                                        </div>
                                        <div className="widgetStat countdown">
                                            <div className="widgetInner">
                                                <span className="value"><span className="time-remaining-value">110</span><span className="time-remaining-label"> days</span></span><span className="label"> Left</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="giveBtn"><a href="#">Give Now</a></div>
                                </div>
                        </div>
                            <div className="padded">
                                <div id="ContentMiddleLayoutLeftBlock1" runat="server">
                                    Sometimes you learn more from your mistakes than you do from your masterpieces. Brown is such a nice color.
                                </div>
                                <div id="ContentLeftBlock2" runat="server"></div>
                            </div>
                        </div>
                    </aside>
                </div>

            </div>
        </section>
     );
}
 
export default CFCircularLeft;