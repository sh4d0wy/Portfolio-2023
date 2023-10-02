import { mediaConstants } from "../../config/mediaConstants";
import React from "react";
import {FaVolumeUp,FaVolumeMute} from 'react-icons/fa'
import "./PlayButton.css"

const PlayButton = ({isPlaying,setIsPlaying})=>{
    const fontStyle = {
      fontSize :"2rem",
      color:"white"
    }
    return (
      <>
      <button onClick={()=>setIsPlaying(!isPlaying)} className="btn">
       {isPlaying ?
      (<FaVolumeUp style={fontStyle}/>)
    :(
      <FaVolumeMute style={fontStyle}/>
      )  
     }
      </button>
      </>
    )
}

export default PlayButton;