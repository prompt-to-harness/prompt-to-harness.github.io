import { Canvas } from '@react-three/fiber'

export default function DodgeGame() {
  return (
    <Canvas style={{ width: 480, height: 320 }}>
      <ambientLight />
      <mesh><boxGeometry /><meshStandardMaterial color="#17664e" /></mesh>
    </Canvas>
  )
}
