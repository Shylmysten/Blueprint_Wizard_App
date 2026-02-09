import { useEffect, useRef } from 'react';

const VimeoVideo = () => {
    const videoRef = useRef(null);
    const playButtonRef = useRef(null);
    const pauseButtonRef = useRef(null);

    useEffect(() => {
        const vidFrame = videoRef.current;
        const player = new window.Vimeo.Player(vidFrame);

        const playBtn = playButtonRef.current;
        const pauseBtn = pauseButtonRef.current;

        const handlePlay = () => {
            player.play();
            playBtn.setAttribute('disabled', true);
            pauseBtn.removeAttribute('disabled');
            console.log('played video');
        };

        const handlePause = () => {
            player.pause();
            pauseBtn.setAttribute('disabled', true);
            playBtn.removeAttribute('disabled');
            console.log('paused video');
        };

        playBtn.addEventListener('click', handlePlay);
        pauseBtn.addEventListener('click', handlePause);

        return () => {
            playBtn.removeEventListener('click', handlePlay);
            pauseBtn.removeEventListener('click', handlePause);
        };
    }, []);

    return (
        <div className="videoHero imod-video-vimeo sectionRow" data-sectionname="video-vimeo">
            <div className="emptyCheck" id="ContentMiddleLayoutVideo2" runat="server">
                <div className="heroItem">
                    <div className="overlay base" />
                    <div className="overlay gradient" />
                    <div className="video-wrap" style={{backgroundImage: "url(/bg-hero_alt.jpg)"}}>
                        <div className="videoInner">
                            <div id="mainBkgdVideo" style={{padding: "10px 0 0 0"}}>
                                <iframe
                                    ref={videoRef}
                                    name="videoFrame"
                                    tabIndex="-1"
                                    id="vimeoiFrame"
                                    src="https://player.vimeo.com/video/359828892?background=1&api=1"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                    title="Background Video" />
                            </div>
                        </div>
                        <div className="mask" />
                    </div>
                    <div className="text">
                        <div className="textInner">
                            <h2 className="title">Welcome to Encoura</h2>
                            <div className="preview">
                                This is a full-width background video module.
                            </div>
                            <div className="buttonRow">
                                <a href="#" className="button">Read the News</a>
                                <a href="#" className="button">Explore More</a>
                            </div>
                        </div>
                    </div>
                    <div className="vimeoBtns">
                        <button
                            ref={playButtonRef}
                            disabled="disabled"
                            type="button"
                            id="play-button"
                            aria-label="Play Background Video"
                        >
                            <i className="fas fa-play" />
                        </button>
                        <button
                            ref={pauseButtonRef}
                            type="button"
                            id="pause-button"
                            aria-label="Pause Background Video"
                        >
                            <i className="fas fa-pause" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VimeoVideo;