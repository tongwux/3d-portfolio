import React from "react";
import { useGLTF } from "@react-three/drei";

const YourModel = () => {
  const { scene } = useGLTF("./models/your-model.glb"); // Make sure the path is correct

  console.log("YourModel Loaded:", scene); // ✅ Debugging: Log to console

  return <primitive object={scene} scale={[1.2, 1.2, 1.2]} position={[2, -5, 0]} />;
};

export default YourModel;
