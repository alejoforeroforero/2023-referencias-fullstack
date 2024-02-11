## Notas:

- Se necesita que el navegador sea compatible con postMessage ¿?

### JSX:

````
import { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

import './YoutubePlayer.css'

const YoutubePlayer = ({ youtubeVideoId }) => {
    const [videoElement, setVideoElement] = useState(null);
    const [videoStyle, setVideoStyle] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [buttonsReady, setButtonsReady] = useState(true);
    const [clickEvent, setClickEvent] = useState(0);


    const parentRef = useRef(null);
    const imgThumbnailRef = useRef(null);
    const progressBarRef = useRef(null);
    const timerId = useRef(null);
    const intervalId = useRef(null);

    useEffect(() => {
        setShowControls(true)
        setVideoStyle(`
            width:${parentRef.current.offsetWidth * 3.5}px; 
            height:${parentRef.current.offsetHeight}px;
            margin-left:-${parentRef.current.offsetWidth + 100}px;
        `);
    }, [])

    useEffect(() => {

        setButtonsReady(true);

        if (showControls) {
            timerId.current = setTimeout(() => {
                if (isPlaying) {
                    setShowControls(false);
                    setButtonsReady(false);
                }
            }, 3000);
        };
        return () => {
            clearTimeout(timerId.current)
        }
    }, [clickEvent])

    useEffect(() => {
        if (isPlaying) {
            intervalId.current = setInterval(() => {
                const percentage = videoElement.target.getCurrentTime() * 100 / videoElement.target.getDuration();
                const leftPosPx = parentRef.current.offsetWidth * percentage / 100;
                progressBarRef.current.style.width = leftPosPx + 'px';
            }, 500)
        } else {
            clearInterval(intervalId.current)
        }

        return () => {
            clearInterval(intervalId.current)
        }

    }, [isPlaying])

    const handleOnPlay = () => {
        imgThumbnailRef.current.style.visibility = 'hidden';
    }

    const handleOnReady = (event) => {
        setShowControls(true);
        setVideoElement(event);
        const iframe = parentRef.current.getElementsByTagName('iframe')[0];
        iframe.style = videoStyle;
        console.log('entro en ready')
        setTimeout(() => {
            setShowControls(true);
        }, 2000)
    }

    const handleOnEnd = () => {
        videoElement.target.seekTo(0);
        videoElement.target.pauseVideo();
        setIsPlaying(false);
        setTimeout(() => {
            imgThumbnailRef.current.style.visibility = 'visible';
        }, 100)
    }

    const handleIconOnClick = () => {
        if (buttonsReady) {
            setIsPlaying(!isPlaying);
            if (isPlaying) {
                videoElement.target.pauseVideo();
                imgThumbnailRef.current.style.visibility = 'visible';
            } else {
                videoElement.target.playVideo();
                imgThumbnailRef.current.style.visibility = 'hidden';
            }
        }
    }

    const handleBarraOnClick = (e) => {
        if (buttonsReady) {
            const posLeft = e.target.getBoundingClientRect().x;
            const width = e.target.getBoundingClientRect().width;
            let percentage = (e.pageX - posLeft) * 100 / width;
            const duration = videoElement.target.getDuration();
            const finalPos = percentage * duration / 100;

            if (percentage < 2) {
                percentage = 0;
            }
            videoElement.target.seekTo(finalPos);
        }
    }

    const handleGeneralOnClick = () => {
        setShowControls(true);
        setClickEvent(clickEvent + 1)
    }

    const handleOnStateChange = () => {

        if (videoElement.target.playerInfo.playerState == 2) {
            imgThumbnailRef.current.style.visibility = 'visible';
        }

        if (videoElement.target.playerInfo.playerState == 0) {
            setTimeout(() => {
                imgThumbnailRef.current.style.visibility = 'visible';
                progressBarRef.current.style.width = '0px'
                setShowControls(true);
                setButtonsReady(true);
            }, 1000)
        }
    }

    const drawControls = () => {
        return (
            <div onClick={handleGeneralOnClick} className='video-controls' style={{ opacity: showControls ? '1' : '0'}}>
                <div className='video-play-img-container'>
                    <FontAwesomeIcon
                        onClick={handleIconOnClick}
                        icon={isPlaying ? faPause : faPlay}
                        size="2xl"
                        style={{ color: "#FFD43B", }}
                    />
                </div>
                <div className='video-img-container'>
                    <img ref={imgThumbnailRef} src={`https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`}></img>
                </div>
                <div className='bar-container'>
                    <div className='bar-background' />
                    <div ref={progressBarRef} className='bar-progress' />
                    <div onClick={handleBarraOnClick} className='bar-onclick' />
                </div>
            </div>
        )
    }

    const drawYoutube = () => {
        return (
            <YouTube
                videoId={youtubeVideoId}
                onReady={handleOnReady}
                onEnd={handleOnEnd}
                onPlay={handleOnPlay}
                onStateChange={handleOnStateChange}
            />
        )
    }

    return (
        <>
            <div className='youtube-container' ref={parentRef}>
                {drawYoutube()}
                {drawControls()}
            </div>
        </>
    )
}

export default YoutubePlayer;

//https://img.youtube.com/vi/E1Vu74ZHVlY/0.jpg

{/* <YouTube
          videoId={string}                  // defaults -> ''
          id={string}                       // defaults -> ''
          className={string}                // defaults -> ''
          iframeClassName={string}          // defaults -> ''
          style={object}                    // defaults -> {}
          title={string}                    // defaults -> ''
          loading={string}                  // defaults -> undefined
          opts={obj}                        // defaults -> {}
          onReady={func}                    // defaults -> noop
          onPlay={func}                     // defaults -> noop
          onPause={func}                    // defaults -> noop
          onEnd={func}                      // defaults -> noop
          onError={func}                    // defaults -> noop
          onStateChange={func}              // defaults -> noop
          onPlaybackRateChange={func}       // defaults -> noop
          onPlaybackQualityChange={func}    // defaults -> noop
        /> */}
````

### CSS

```
.youtube-container {
  width: 100vw;
  max-width: 920px;
  height: 100vh;
  background-color: antiquewhite;
  margin: auto;
  overflow: hidden;
  position: relative;
}

.video-controls {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(255, 0, 0, 0);

  .video-img-container {
    z-index: 1;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      transform: scale(3);
      filter: blur(13px);
    }
  }

  .video-play-img-container {
    z-index: 2;
    position: absolute;
    height: 20%;
    width: 100%;
    top: 35%;
    left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;    

    svg {
      width: 40px;
      height: 40px;
      background-color: rgb(109, 158, 158);
      border-radius: 12px;
      padding: 12px;
    }
  }

  .bar-container {
    z-index: 3;
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 65px;

    .bar-background{
      position: absolute;
      height: 10px;      
      left: 0px;
      top:15px;
      width: 100%;
      background-color: rgba(190, 187, 187, 0.3);
    }

    .bar-progress {
      position: absolute;
      height: 10px;      
      left: 0px;
      top:15px;
      background-color: rgb(161, 225, 255);
    }

    .bar-onclick{
      position: absolute;
      height: 40px;      
      left: 0px;
      top:0px;
      width: 100%;
      background-color: rgb(78, 145, 254, 0);
    }
  }
}

```
