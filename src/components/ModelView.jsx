import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import { Canvas } from "@react-three/fiber";



import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import Iphone from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (



 

      <group ref={groupRef} name={`{index === 1} ? 'small' : 'large'`} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader />}>
          <Iphone 
            scale={index === 1 ? [17, 17, 17 ] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    
     
  )
}

export default ModelView