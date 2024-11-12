import { OrbitControls , Html } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Model as GearModels } from './components/model'
import { useState } from 'react';


export default function Experience()
{
    const [isAnimationActive, setIsAnimationActive] = useState(false);
    

    const handleTriggerAnimation = () => {
        setIsAnimationActive((prev) => !prev);
       
    };

    return <>
        
        <axesHelper />

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />

        <ambientLight intensity={ 1.5 } />

        <GearModels isAnimationsActive={isAnimationActive}/>

        <Html
            position={[0, 1, 0.1]} 
            distanceFactor={5}   
            transform              
            // occlude     
            pointerEvents="auto"        
        >
            <input type="text" placeholder="Enter text here" style={{index:999}}/>
            <button onClick={handleTriggerAnimation}>Enter</button>
        </Html>
        

    </>
}