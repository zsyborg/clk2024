// components/ThreeScene.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Scene, TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'  
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { Box } from '@react-three/drei';


const Coin = () => {
  const mesh = useRef();


  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x= 90;
      // mesh.current.rotation.y= 90;
      // mesh.current.rotation.x += 0.01;
      mesh.current.rotation.z += 0.05;
      mesh.current.position.y= 0;
      mesh.current.scale.x = 2
      mesh.current.scale.y = 2
      mesh.current.scale.z = 2
    }
  });
  const texture = new TextureLoader().load('/coin.png');


  function meshClicker() {

    window.location.href= "/about"
    
  }

  function Scene() {
    const gltf = useLoader(GLTFLoader, '/podium.glb')
    return <primitive object={gltf.scene} />
  }
  

  return (
    <mesh ref={mesh} onClick={meshClicker}>
      <cylinderGeometry args={[0.5, 0.5, 0.1, 100]} />
      <meshStandardMaterial map={texture} />
    </mesh>
    
  );
};

const ThreeScene = () => {
  return (
    <Canvas onCreated={state => state.gl.setClearColor("rgba(0,0,0,0)")} style={{width:"100vw", height: "100vh"}}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Coin position={[50, 0, 0]} />
    </Canvas>
  );
};

export default ThreeScene;
