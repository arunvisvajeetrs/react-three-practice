import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Box({ color, position = [0, 0, 0], rotationSpeed = 1 }) {
  const meshRef = useRef()

  // // Runs on every rendered frame (~60fps). Use `delta` for frame-rate independent motion.
  // useFrame((state, delta) => {
  //   if (!meshRef.current) return
  //   meshRef.current.rotation.x += delta * rotationSpeed * 0.5
  //   meshRef.current.rotation.y += delta * rotationSpeed
  // })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

export default Box
