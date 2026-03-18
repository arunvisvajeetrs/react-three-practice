import "./App.css";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import Cuboid from "./Cuboid";
import { Model } from "./My_model";
import { Physics, RigidBody } from "@react-three/rapier";

function App() {
  const cubeBodyRef = useRef(null);

  const { x, y, z, color } = useControls("Cube", {
    x: { value: 0, min: -5, max: 5, step: 0.01 },
    y: { value: 0, min: -5, max: 5, step: 0.01 },
    z: { value: 0, min: -5, max: 5, step: 0.01 },
    color: { value: "blue" },
  });

  return (
    <>
      <Leva collapsed />
      <Canvas>
        <OrbitControls />
        <Environment
          preset="dawn"
          backgroundBlurriness={0.3}
          background={true}
          environmentIntensity={0.8}
          backgroundIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
          backgroundRotation={[0, Math.PI / 2, 0]}
        />

        <Physics debug gravity={[0, -9.81, 0]}>
          <RigidBody type="fixed" colliders="cuboid" position={[0, -1.5, 0]}>
            <Cuboid size={[20, 1, 20]} color="white" />
          </RigidBody>

          <RigidBody
            ref={cubeBodyRef}
            colliders="cuboid"
            position={[x, y, z]}
            restitution={1.2}
          >
            <Cuboid
              color={color}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                cubeBodyRef.current?.applyImpulse({ x: 0, y: 5, z: 0 }, true);
              }}
            />
          </RigidBody>
        </Physics>

        <Model color={color} position={[x + 1, y, z]} />
      </Canvas>
    </>
  );
}

export default App;
