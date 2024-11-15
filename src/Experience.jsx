import { OrbitControls , Html } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Model as GearModels } from './components/model'
import { useState } from 'react';
import { useControls, Leva } from 'leva';

export default function Experience()
{
    const [isAnimationActive, setIsAnimationActive] = useState(false);
    

    const handleTriggerAnimation = () => {
        setIsAnimationActive((prev) => !prev);
    };

    const inputPosition = {
        x:0,
        y:0.90,
        z:-0.10
    }

    const { x, y, z} = useControls({
        x: { value: inputPosition.x, min: -10, max: 10, step: 0.1 },
        y: { value: inputPosition.y, min: -10, max: 10, step: 0.1 },
        z: { value: inputPosition.z, min: -10, max: 10, step: 0.001 },
    })
 

    return <>
        
        <axesHelper />

        <Perf position="top-left" />

        {/* <Leva/> */}

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />

        <ambientLight intensity={ 1.5 } />

        <GearModels isAnimationsActive={isAnimationActive}/>

        <Html
            position={[x,y,z]} 
            distanceFactor={6}   
            transform              
            occlude="blending" 
            pointerEvents="auto"        
        >
            <input type="text" placeholder="Enter text here" style={{index:999}}/>
            <button onClick={handleTriggerAnimation}>Enter</button>
        </Html>
        

    </>
}