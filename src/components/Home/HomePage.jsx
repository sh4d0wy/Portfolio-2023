import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../assets/Scene";
import PlayButton from "../PlayButton/PlayButton"
import "./HomePage.css";
import { mediaConstants } from "../../config/mediaConstants";

const HomePage = () => {
    const script = "Hello Everyone!! I am Saksham Bhugra\n Full Stack 3d Web developer"
    const [isPlaying,setIsPlaying] = useState(false);
    const [text, setText] = useState(script);
    const [box,setBox] = useState(false)
    const [imgsrc,setImgsrc] = useState("")
    const [title,setTitle] = useState("Something");
    const [url,setUrl] = useState("#");

    useEffect(()=>{
        const audio = new Audio(mediaConstants.musicPath);
        audio.volume = 1;
        audio.loop = true;

        if(isPlaying){
            audio.play();
        }
        return ()=>{
            audio.pause();
        }
    },[isPlaying]);

  return (
    <>

      <div className="homepage-container">
        <div className="logo-container">
          <img src={mediaConstants.logo} alt="Saksham Bhugra" />
        </div>
        <div className="box-container">
          {box?(
            <div className="box-wrapper flex">
              <div className="blur">
              </div>
              <div className="box-content flex">
                <div className="image-content flex">
                    <img src={imgsrc} />
                </div>
                <div className="text-content flex">
                  <div className="title">
                      <h3>{title}</h3>
                  </div>
                  <div className="button">
                    <button className="btn-project"><a href={url}>View Project</a></button>
                  </div> 
                </div>
              </div>
            </div>
          ):(
            <h2>{text}</h2>
          )}
        </div>
      
        <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Canvas id="canvas" camera={{ fov: 60, near: 0.1, far: 1000 }}>
          <ambientLight intensity={0.7} />
          <spotLight
            position={[-10,2,10]}
            intensity={300}
            penumbra={1}
            angle={0.5}
            castShadow={true}
          />
          <pointLight intensity={10} position={[-5, 1, 3]} angle={0.2} castShadow={true}/>
          <Model
            position={[0, -0.7, 0]}
            rotation={[0,-1.5,0]}
            scale={[0.1, 0.095, 0.095]}
            onAngleChange={setText}
            setBox={setBox}
            setImgsrc={setImgsrc}
            setTitle = {setTitle}
            setUrl = {setUrl}
          />
        </Canvas>
      </div>
    </>
  );
};
export default HomePage;

//Frontend

// https://skyexcel2csv.netlify.app/
// https://codepen.io/sh4d0wy/pen/BavQNeM
// https://dreamy-manatee-a9f8e6.netlify.app/

//Backend

// https://cloudinary-microservice.onrender.com
// https://newtrasncribe.onrender.com/transcribe