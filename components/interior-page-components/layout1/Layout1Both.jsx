import Image from "next/image";
import {useEffect} from "react";

const Layout1Both = () => {
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
        <section className="contentRow interior-type1 sidebar-both" data-sectionname="interior-2">
            <div className="container">
        
                {/*<!-- Three Col Interior Verison -->*/}
                <div className="row">
                        <section className="col-sm-12 col-md-9 col-md-push-3 midWrap">
                            <div id="ContentMiddleLayoutFtImgWide" runat="server" className="ftImg emptyCollapse-bottom">
                                <Image 
                                    border="0" 
                                    src="/interior-wide1.jpg"
                                    width={823}
                                    height={242}
                                    style={{width: '100%'}}
                                    alt=''
                                />
                            </div>
        
                            <div className="row">
                                <div className="col-sm-12 col-md-9 mainCol">
                                    <div id="ContentMiddleLayoutFtImg" runat="server" className="ftImg emptyCollapse-bottom">
                                        
                                    </div>
        
                                    <div id="ContentPageName" runat="server" className="pageName">
                                        <h1>Page Name</h1>
                                    </div>
        
                                    <nav id="ContentBreadCrumbsNow" runat="server" className="hidden-xs breadCrumbs imodSiteMap">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">First Level</a></li>
                                            <li><a href="#">Second Level</a></li>
                                            <li className="selected"><a href="#">Active Level</a></li>
                                        </ul>
                                    </nav>
        
                                    <div id="ContentMiddle" runat="server">
                    
                                        {/*<!-- Content Area -->*/}
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id justo eget orci sollicitudin dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; <a href="#">Linked text example.</a> Phasellus quis bibendum nulla. Morbi venenatis urna eu mauris aliquet faucibus. Nam eu ex lorem. Nam convallis, massa eu volutpat dapibus, mi sem porta urna, id consequat ex velit vitae nisi. Fusce rutrum lectus vel tempus eleifend. Proin mi felis, euismod sit amet magna in, sollicitudin feugiat felis.</p>
                                        <p>Maecenas id turpis ante. Cras rhoncus iaculis dui, vel condimentum mi porttitor eget. Nam aliquet massa sit amet velit condimentum, sit amet consequat justo tincidunt. Nam auctor tellus non tellus vulputate volutpat. Cras convallis sem et scelerisque pulvinar. Morbi ac arcu et lacus congue congue. Vestibulum venenatis porttitor libero, ac pretium nunc. Integer maximus vulputate erat eu iaculis.</p>
                                        <a href="#" className="button">Optional Button Example</a>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <h2>Section Title</h2>
                                                <p>This content is created using the mobile-ready content blocks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id justo eget orci sollicitudin dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus quis bibendum nulla. Morbi venenatis urna eu mauris aliquet faucibus. Nam eu ex lorem.</p>
                                            </div>
                                            <div className="col-xs-12 col-sm-6">
                                                <h2>Section Title</h2>
                                                <p>This content is created using the mobile-ready content blocks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id justo eget orci sollicitudin dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus quis bibendum nulla. Morbi venenatis urna eu mauris aliquet faucibus. Nam eu ex lorem.</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div id="calloutBox" className="patternsCallout">
                                            <i className="fa fa-puzzle-piece"></i>
                                            <p>Please choose four of the following six patterns to be built on your interior templates. Indicate your selections on the Blueprint questionnaire provided to you by your project manager.</p>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <section className="bp-preview-section interior-section col-xs-12" id="intSection1">
                                                <h2>1. Standard News [News Pattern]</h2>
                                        
                                                <div className="newsItem">
                                                    <a href="#">
                                                        <div className="thumb"
                                                            style={{backgroundImage:"url(/interior-square1.jpg)"}}>
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
                                                <h2>2. Standard Events [Events Pattern]</h2>
                                                <div className="eventItem withThumb">
                                                    <div className="date">
                                                        <div className="month">Oct</div>
                                                        <div className="day">31</div>
                                                    </div>
                                                    <div className="thumb"
                                                        style={{backgroundImage:"url(/interior-square3.jpg)"}}>
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
                                                <h2>3. Accordion [News Pattern]</h2>
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
                                                        <div className="col-xs-12"><h2>4. 2-Across [News Pattern]</h2></div>
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
                                                        <div className="col-xs-12"><h2>5. 3-Across [News Pattern]</h2></div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4 gridItem threeAcross">
                                                            <div className="gridInner">
                                                                <div className="tools"></div>
                                                                <a href="#">
                                                                    <div className="thumb"
                                                                        style={{backgroundImage:"url(/interior-rect1.jpg)"}}>
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
                                                                    <div className="thumb"
                                                                        style={{backgroundImage:"url(/interior-rect3.jpg)"}}>
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
                                                            <h2>6. 4-Across [News Pattern]</h2>
                                                            <p>This pattern is NOT suggested for the 3 column (sidebar-both) layout (still will work, but content will appear very smashed).</p>
                                                        </div>
                                            
                                                        <div className="col-xs-12 col-sm-6 col-md-3 gridItem fourAcross">
                                                            <div className="gridInner">
                                                                <div className="tools"></div>
                                                                <a href="#">
                                                                    <div className="thumb"
                                                                        style={{backgroundImage:"url(/interior-rect1.jpg)"}}>
                                                                        <img src="/interior-rect1.jpg" alt="" className="invisible"/>
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
                                                                <div className="thumb"
                                                                    style={{backgroundImage:"url(/interior-rect2.jpg)"}}>
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
                                                                <div className="thumb" style={{backgroundImage:"url(/interior-rect4.jpg)"}}>
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
                                </div>
                                <aside className="col-sm-12 col-md-3 sideBar structRight">
                                        {/*<!-- SIDEBAR - RIGHT -->*/}
                                        <div id="ContentMiddleLayoutRightBlock1" runat="server">
                                            <p>Pellentesque porta et lorem id lacinia. Nam malesuada nec tortor placerat pulvinar. Curabitur ut sapien odio. Ut aliquet ac urna eget eleifend.</p>
                                        </div>
                                        <div id="ContentRightBlock2" runat="server"></div>    
                                </aside>
                            </div>
                        </section>
        
                    {/*<!-- SIDEBAR - RIGHT -->*/}
                    <aside className="col-sm-12 col-md-3 col-md-pull-9 sideBar structLeft">
                        <nav id="ContentLeftNavNow" runat="server" className="secondaryNav imodSiteMap hidden-xs hidden-sm">
                            <ul>
                                <li><a href="#">Secondary Page 1</a></li>
                                <li className="selected"><a href="#">Secondary Page 2</a>
                                    <ul>
                                        <li><a href="#">Tertiary Page 1</a></li>
                                        <li><a href="#">Tertiary Page 2</a></li>
                                        <li className="selected"><a href="#">Tertiary Page 3</a></li>
                                        <li><a href="#">Tertiary Page 4</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Secondary Page 3</a></li>
                                <li><a href="#">Secondary Page 4</a></li>
                            </ul>
                        </nav>
                        <div id="ContentMiddleLayoutLeftBlock1" runat="server">
        
                            <img src="/news400x250a.jpg"/>
                            <h2>Optional Content Area</h2>
                            <p>Curabitur cursus sodales massa congue vestibulum. Curabitur hendrerit ligula quis nunc dictum volutpat. Aenean enim nulla, finibus id finibus nec, malesuada sed arcu.</p>
        
                        </div>
                        <div id="ContentLeftBlock2" runat="server"></div>
                    </aside>
                </div>
        
            </div>
        </section>
     );
}
 
export default Layout1Both;