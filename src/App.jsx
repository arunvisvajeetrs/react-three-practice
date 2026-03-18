import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import Box from "./box";
import { Model } from "./My_model";

function App() {
  const { x, y, z, color } = useControls("Cube", {
    x: { value: 0, min: -5, max: 5, step: 0.01 },
    y: { value: 0, min: -5, max: 5, step: 0.01 },
    z: { value: 0, min: -5, max: 5, step: 0.01 },
    color: { value: "blue" },
  });

  return (
    <>
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
        <Box color={color} position={[x, y, z]} />
        <Model color={color} position={[x + 1, y, z]} />
      </Canvas>
    </>
  );
}

export default App;
