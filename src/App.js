import "./index.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Groung";

function CarShow() {
  return (
    <>
      {/* OrbitControls - помошник в 3Д, позволяет перемещать камеру вокруг
        фиксированной точки отмечаем параметром target    
    */}
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      {/* PerspectiveCamera - камера, которую мы используем для проекта,
        обозначаем позицию камеры (position),
        поле зрения камеры (fov), включаем ее по умолчанию
       */}
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      {/* let color = new Color(0, 0, 0) */}
      <color args={[0, 0, 0]} attach="background" />

      {/* 
        Синтаксис JS
        let spotlight = new SpotLight()
        spotlight.intensity = 1.5
        spotlight.position.set(...)
      */}
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      {/* рендерит дефолтные сцены */}
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
