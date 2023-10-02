
import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber"
import scenePath from "./planeModel.glb"

export function PlaneModel(props) {
  const { nodes, materials } = useGLTF(scenePath)
  const groupRef = useRef() 
  const orbitRef = useRef()
  useFrame(()=>{
    // groupRef.current.position.x +=0.1;
    // groupRef.current.position.y +=0.1;

    // groupRef.current.rotation.z = 1;
    //
  })

  return (
    <>
    <OrbitControls ref={orbitRef} />
    <group ref = {groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.awionetka_airplane_0.geometry} material={materials.airplane} scale={10} />
    </group>
    </>
  )
}

useGLTF.preload(scenePath)
