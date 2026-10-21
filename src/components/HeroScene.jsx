import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF } from '@react-three/drei';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
function Model({ reduced, onReady, attempt }) {
  const { scene } = useGLTF(`/models/hero-optimized.glb?attempt=${attempt}`);
  useEffect(() => { onReady(true); }, [onReady]);
  useFrame((state, delta) => {
    if (!reduced) { easing.dampE(scene.rotation, [-state.pointer.y / 12, state.pointer.x / 12, 0], .25, delta); }
  });
  return <primitive object={scene} scale={[1.2,1.2,1.2]} position={[2,-5,0]} />;
}
export default function HeroScene({ onReady, attempt }) {
  const [visible,setVisible] = useState(true);
  const [reduced,setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(media.matches);
    media.addEventListener('change', change);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(document.getElementById('home'));
    return () => { observer.disconnect(); media.removeEventListener('change', change); };
  }, []);
  return <Canvas className="hero-canvas" style={{pointerEvents:'none',touchAction:'pan-y'}} dpr={[1,1.5]} frameloop={!visible ? 'never' : reduced ? 'demand' : 'always'} fallback={<span className="sr-only">Static desktop preview</span>} gl={{alpha:true,antialias:true}}>
    <PerspectiveCamera makeDefault position={[0,0,20]} />
    <Suspense fallback={null}><Model attempt={attempt} reduced={reduced} onReady={onReady} /></Suspense>
    <ambientLight intensity={1} /><directionalLight position={[10,10,10]} intensity={.5} />
  </Canvas>;
}

