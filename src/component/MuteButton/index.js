import React from 'react'
import './style.scss'

const Video = (props) => {

    const { ratio, src } = props;

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