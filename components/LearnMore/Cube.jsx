import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map" sourceFile={undefined}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <color attach="background" args={["#3e216e"]} />
          <Text ref={textRef} fontSize={2} color="#f0f2f1">
            $GHOST AI
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
