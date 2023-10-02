

import React, { useState,useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import scenePath from "./scene-transformed.glb"
import { OrbitControls } from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import { mediaConstants } from '../config/mediaConstants';

export function Model(props) {
  const script1 = "Hello Everyone!! I am Saksham Bhugra\n Full Stack 3d Web developer"
  const script2 = "I am a 2nd Year Student of BTech from CS"
  const script3 = "I Have Expertise in MERN Stack, React-three fiber and Java"
  const script4 = "Let's dive into my work"
  const script5 = "Hello Everyone!! I am Saksham Bhugra\n Full Stack 3d Web developer"
  
  const { nodes, materials } = useGLTF(scenePath)
  const groupRef = useRef();
  const orbitRef = useRef();
  useFrame(()=>{
    orbitRef.current.rotateSpeed = 0.2;
    
    orbitRef.current.minPolarAngle = 1.5;
    orbitRef.current.maxPolarAngle = 1.5;

    let angle = orbitRef.current.getAzimuthalAngle();
    
    props.setBox(false);
    if(angle>=0 && angle<1){
      props.onAngleChange(script1);
    }
    else if(angle>1 && angle<=2){
      props.onAngleChange(script2)
    }
    else if(angle>2 && angle<=3){
      props.onAngleChange(script3)

    }
    else if(angle>3){
      props.onAngleChange(script4)

    }else if(angle<-1.5 && angle>=(-2.5)){
      props.setBox(true);
      props.setImgsrc(mediaConstants.image1);
      props.setTitle("Excel To CSV converter");
      props.setUrl("https://skyexcel2csv.netlify.app")
    }
    else if(angle>-1.5 && angle<=-0.9){
      props.setBox(true);
      props.setImgsrc(mediaConstants.image2);
      props.setTitle("Random Quote Generator");
      props.setUrl("https://codepen.io/sh4d0wy/pen/BavQNeM")

    }
    else if(angle>-0.9 && angle<0){
      props.setBox(true);
      props.setImgsrc(mediaConstants.image3);
      props.setTitle("Youtube Video Transcriber\n(Backend)");
      props.setUrl("https://newtrasncribe.onrender.com/transcribe")

    }
  })


  return (
    <> 
        <OrbitControls ref={orbitRef}/>
    <group ref = {groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube27_phongE1_0.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.pCylinder139_fox_readyfox_white_0.geometry} material={materials.PaletteMaterial003} position={[0.47, 0, 1.217]} rotation={[0, -1.198, 0]} />
      <mesh geometry={nodes.polySurface1541_water_0.geometry} material={materials.PaletteMaterial004} position={[-10.297, 0, 5.622]} rotation={[0, -0.411, 0]} />
      <instancedMesh args={[nodes.polySurface944_tree_body_0.geometry, materials.PaletteMaterial001, 8]} instanceMatrix={nodes.polySurface944_tree_body_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface945_tree1_0.geometry, materials.PaletteMaterial001, 5]} instanceMatrix={nodes.polySurface945_tree1_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface946_tree2_0.geometry, materials.PaletteMaterial001, 5]} instanceMatrix={nodes.polySurface946_tree2_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface947_tree1_0.geometry, materials.PaletteMaterial001, 5]} instanceMatrix={nodes.polySurface947_tree1_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface948_tree_body_0.geometry, materials.PaletteMaterial001, 8]} instanceMatrix={nodes.polySurface948_tree_body_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface949_tree_body_0.geometry, materials.PaletteMaterial001, 8]} instanceMatrix={nodes.polySurface949_tree_body_0.instanceMatrix} />
    </group>
    </>
  )
}

useGLTF.preload(scenePath)
