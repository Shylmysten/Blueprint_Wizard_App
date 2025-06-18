import Image from "next/image";
import {useEffect, useRef, useState} from "react";

const FullWidthTabsPattern = () => {
    const fwTabsRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);
    
    useEffect(() => {
        const initializeTabs = () => {
            if (typeof window.$ !== 'undefined' && typeof window.$.fn.imodTabs !== 'undefined') {
                const tabs = fwTabsRef.current;
                const sectionName = `#${tabs.closest('.body-section').id}`;

                jQuery(tabs).imodTabs({
                    startCollapsed: 'accordion',
                    fluidHeight: false,
                    accordionTabElement: '<h2></h2>',
                    navigationContainer: `${sectionName }+ .menuwrap`,
                    click: function(e, tab) {},
                    activate: function(e, tab) {},
                    activateState: function(e, state) {}
                });

                // Mark as initialized
                setIsInitialized(true);
            } else {
                console.error('jQuery or iModTabs is not loaded');
            }
        };

        if (!isInitialized) {
            // Wait for jQuery and CircularCountdown to load
            const interval = setInterval(() => {
                if (typeof window.$ !== 'undefined' && typeof window.$.fn.imodTabs !== 'undefined') {
                    clearInterval(interval);
                    initializeTabs();
                }
            }, 100);

            return () => clearInterval(interval);
        }


    }, [isInitialized])

    return ( 
        <section className="imod-tabs-3 sectionRow tabSection" data-sectionname="tabs-3">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 sectionHeader emptyCheck" id="ContentMiddleLayoutTabs3Hdr" runat="server">
                        <h2>Tabbed Content #3</h2>
                    </div>
                </div>
            </div>
                
            <div className="section-tabs">
                <div ref={fwTabsRef} className="tabs-wrap full-width">
                    <div className="menuwrap emptyCheck" id="ContentMiddleLayoutTabsNav3" runat="server">

                        <ul className="menu">
                            <li>
                                <a href="#tab-panel-1" className="tabLink">Tab 1</a>
                            </li>
                            <li>
                                <a href="#tab-panel-2" className="tabLink">Tab 2 with a really long title</a>
                            </li>
                            <li>
                                <a href="#tab-panel-3" className="tabLink">Tab 3</a>
                            </li>
                            <li>
                                <a href="#tab-panel-4" className="tabLink">Tab 4</a>
                            </li>
                            <li>
                                <a href="#tab-panel-5" className="tabLink">Tab 5</a>
                            </li>
                        </ul>

                    </div>
                    <div className="content">

                        <div className="content-container" id="tab-panel-1">
                            <div className="container">
                                <div className="row">
                                    <div id="ContentMiddleLayout3Tab1" runat="server" className="col-xs-12 emptyCheck">
                                            <h3>Tab Area #1</h3>
                                            <div className="snippetrow">
                                                <div className="split30left">
                                                        <Image 
                                                            src="/interior-square1.jpg" 
                                                            alt=""
                                                            width={500}
                                                            height={500}
                                                            style={{width: '100%'}}
                                                        />
                                                </div>
                                                <div className="split70right">
                                                        <p>This is a happy place, little squirrels live here and play. These trees are so much fun. I get started on them and I have a hard time stopping. Let's make a nice big leafy tree. Just think about these things in your mind - then bring them into your world. With practice comes confidence.</p>
                                                        <p>Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. You can do anything here. So don't worry about it. A fan brush is a fantastic piece of equipment. Use it. Make friends with it.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="clear"></div>
                        </div>

                        <div className="content-container" id="tab-panel-2">
                            <div className="container">
                                <div className="row">
                                    <div id="ContentMiddleLayout3Tab2" runat="server" className="col-xs-12 emptyCheck">
                                        <h3>Tab Area #2</h3>
                                        <div className="snippetrow">
                                            <div className="split30left">
                                                    <Image 
                                                        src="/interior-square2.jpg" 
                                                        alt=""
                                                        width={500}
                                                        height={500}
                                                        style={{width: '100%'}}
                                                    />
                                            </div>
                                            <div className="split70right">
                                                    <p>Working it up and down, back and forth. In nature, dead trees are just as normal as live trees. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. </p>
                                                    <p>Nice little clouds playing around in the sky. There is immense joy in just watching - watching all the little creatures in nature. That's what makes life fun. That you can make these decisions. That you can create the world that you want. It's beautiful - and we haven't even done anything to it yet. If there's two big trees invariably sooner or later there's gonna be a little tree. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                                 
                            <div className="clear"></div>
                        </div>

                        <div className="content-container" id="tab-panel-3">
                            <div className="container">
                                <div className="row">
                                    <div id="ContentMiddleLayout3Tab3" runat="server" className="col-xs-12 emptyCheck">
                                        <h3>Tab Area #3</h3>
                                        <p>Let's build some happy little clouds up here. I'm gonna add just a tiny little amount of Prussian Blue. It's hard to see things when you're too close. Take a step back and look.</p>
                                        <p><a href="#" className="button">Example Button</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>

                        <div className="content-container" id="tab-panel-4">
                            <div className="container">
                                <div className="row">
                                    <div id="ContentMiddleLayout3Tab4" runat="server" className="col-xs-12 emptyCheck">
                                        <h3>Tab Area #4</h3>
                                        <div className="snippetrow">
                                            <div className="split30left">
                                                <Image 
                                                    src="/interior-square3.jpg" 
                                                    alt=""
                                                    width={500}
                                                    height={500}
                                                    style={{width: '100%'}}
                                                />
                                            </div>
                                            <div className="split70right">
                                                <p>Just let this happen. We just let this flow right out of our minds. You have freedom here. The only guide is your heart. In painting, you have unlimited power. You have the ability to move mountains. Poor old tree. As trees get older they lose their chlorophyll. So often we avoid running water, and running water is a lot of fun. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                            <div className="clear"></div>
                        </div>

                        <div className="content-container" id="tab-panel-5">
                            <div className="container">
                                <div className="row">
                                    <div id="ContentMiddleLayout3Tab5" runat="server" className="col-xs-12 emptyCheck">
                                        <h3>Tab Area #5</h3>
                                        <p>Mountains are so simple, they're hard. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. It's almost like something out of a fairytale book. We artists are a different breed of people. We're a happy bunch. You can do it.</p>
                                        <p>Maybe we got a few little happy bushes here, just covered with snow. You can get away with a lot. If you don't like it - change it. It's your world.</p>
                                    </div>
                                </div>
                            </div>   
                            <div className="clear"></div>
                        </div>

                    </div>
                </div>
            </div>
                
        </section>
     );
}
 
export default FullWidthTabsPattern;