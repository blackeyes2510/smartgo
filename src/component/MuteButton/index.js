import React from 'react'
import './style.scss'

const Video = (props) => {

    // const { src, id, muted, autoplay, ratio, loop } = props;

    const { ratio, src } = props;

    // let mutedParam = '';
    // if (muted) {
    //     mutedParam = 'muted';
    // }

    // let autoplayParam = '';
    // if (autoplay) {
    //     autoplayParam = 'autoplay';
    // }

    // let loopParam = '';
    // if (loop) {
    //     loopParam = 'loop';
    // }

    // ${loopParam}  

    return (
        <div className={`videoContainer ratio-${ratio}`} dangerouslySetInnerHTML={{
            
            __html: `<video src="${src}" controls />`

            //   <video
            //   ${mutedParam}
            //   ${autoplayParam}
            //   ${loopParam}    
            //   playsinline

            //   id="${id}"
            //   controls
            // />`

        }}
        />
    );
}

export default Video