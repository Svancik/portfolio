import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Chair from "./Chair";
import React from "react";

export const WebDesign = () => {
  return (
    <Canvas>
      <Chair />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};
