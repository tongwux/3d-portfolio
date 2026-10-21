import React, { useEffect, useRef, useMemo, useState } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const Developer = ({ animationName = "idle", ...props }) => {
  console.log("✅ Developer Component Loaded");

  const group = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const { scene } = useGLTF("models/animations/developer.glb");

  // ✅ Clone the model to prevent shared state issues
  const clone = useMemo(() => (scene ? SkeletonUtils.clone(scene) : null), [scene]);
  const { nodes, materials } = clone ? useGraph(clone) : { nodes: {}, materials: {} };

  // ✅ Load FBX animations
  const idleFBX = useFBX("models/animations/idle.fbx");
  const saluteFBX = useFBX("models/animations/salute.fbx");
  const clappingFBX = useFBX("models/animations/clapping.fbx");
  const victoryFBX = useFBX("models/animations/victory.fbx");

  // ✅ Ensure animations are renamed and extracted correctly
  const animations = useMemo(() => {
    const anims = [];

    if (idleFBX?.animations.length) {
      idleFBX.animations[0].name = "idle"; // Rename correctly
      anims.push(idleFBX.animations[0]);
      console.log("✅ Renamed animation: idle", idleFBX.animations[0]);
    }

    if (saluteFBX?.animations.length) {
      saluteFBX.animations[0].name = "salute";
      anims.push(saluteFBX.animations[0]);
      console.log("✅ Renamed animation: salute", saluteFBX.animations[0]);
    }

    if (clappingFBX?.animations.length) {
      clappingFBX.animations[0].name = "clapping";
      anims.push(clappingFBX.animations[0]);
      console.log("✅ Renamed animation: clapping", clappingFBX.animations[0]);
    }

    if (victoryFBX?.animations.length) {
      victoryFBX.animations[0].name = "victory";
      anims.push(victoryFBX.animations[0]);
      console.log("✅ Renamed animation: victory", victoryFBX.animations[0]);
    }

    return anims;
  }, [idleFBX, saluteFBX, clappingFBX, victoryFBX]);

  // ✅ Bind animations to the correct object
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    console.log("🎬 Available animations after renaming:", names);
    console.log("🎭 Available actions:", Object.keys(actions));

    if (!actions || !actions[animationName]) {
      console.error(`❌ Animation "${animationName}" not found in available actions:`, Object.keys(actions || {}));
      return;
    }

    setIsLoaded(true);
    actions[animationName].reset().fadeIn(0.5).play();

    return () => {
      if (actions[animationName]) actions[animationName].fadeOut(0.5);
    };
  }, [animationName, actions]);

  if (!scene) {
    console.warn("⚠️ Developer model not found!");
    return null;
  }

  if (!isLoaded) return null;

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

// ✅ Preload animations for performance
useGLTF.preload("models/animations/developer.glb");
useFBX.preload("models/animations/idle.fbx");
useFBX.preload("models/animations/salute.fbx");
useFBX.preload("models/animations/clapping.fbx");
useFBX.preload("models/animations/victory.fbx");

export default Developer;
