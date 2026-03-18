function Cuboid({ size = [1, 1, 1], color = "white", ...meshProps }) {
  return (
    <mesh {...meshProps}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cuboid;
