import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { yellowImg } from "../utils";



import * as THREE from "three"
import ModelView from './ModelView';
import { View, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { models, sizes } from "../constants";
import Lights from './Lights';

const Model = () => {
  
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
      title: 'iPhone 15 Pro in Natural Titanium',
      color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
      img: yellowImg,
    });

    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();
  
    const small = useRef();
    const large = useRef();

    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    useGSAP(() => {
      gsap.to('#heading' , { y:0, opacity:1 })
    }, []);

  return (
    <section className='sm:py-32 py-20 sm:px-10 px-5 mb-10'>
      <div className="screen-max-width">
          <h1 id='heading' className='text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>
              Take a closer look. 
          </h1>

        <div className='flex flex-col items-center mt-5 w-full h-[75vh] mg:h-[90vh] overflow-hidden relative bg-gray-900 rounded-lg cursor-pointer'>
          
          {/* ✅ Canvas Should Wrap ModelView */}
          <Canvas
            className='w-full h-full '
            style={{
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              overflow: 'hidden'  
            }}
            eventSource={document.getElementById('root')}
            shadows
          >
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />
            <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.6} />

            {/* ✅ Pass ModelView inside Canvas */}
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
              
            />    

          </Canvas>
        </div>

        <div className='mx-auto w-full'>
          <p className='text-sm font-light text-center mb-5' >{model.title}</p>
          <div className="flex-center">
            <ul id='list' className="flex items-center justify-center px-4 py-7 rounded-full bg-gray-300 backdrop-blur gap-4">
              {models.map((item, i) => (
                <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" 
                    style={{ backgroundColor: item.color[0] }} 
                    onClick={() => setModel(item)} />
              ))}
            </ul>

            <button id='pill-btn' className="flex items-center justify-center px-6 py-5 rounded-full bg-gray-300 backdrop-blur ml-5">
              {sizes.map(({label, value}) => (
                  <span key={label}
                        className="w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all"
                        style={{
                          backgroundColor: size === value ? "white" : "transparent", 
                          color: size === value ? "black" : "white"
                        }} 
                        onClick={() => setSize(value)}>
                      {label}
                  </span>
              ))}
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Model;
