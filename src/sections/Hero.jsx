import { Component, Suspense, lazy, useEffect, useRef, useState } from 'react';
const Scene = lazy(() => import('../components/HeroScene.jsx'));
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onFailure(); }
  render() { return this.state.failed ? <p className="absolute bottom-28 left-0 right-0 text-center text-white-600">3D preview unavailable. <button className="underline" onClick={this.props.onRetry}>Retry</button></p> : this.props.children; }
}
const Hero = () => {
  const [playSound, setPlaySound] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const audioRef = useRef(null);
  useEffect(() => {
    if (!playSound) { audioRef.current?.pause(); return; }
    if (!audioRef.current) { audioRef.current = new Audio('/assets/keyboard_typing.mp3'); audioRef.current.loop = true; }
    audioRef.current.play().catch(() => setPlaySound(false));
    return () => audioRef.current?.pause();
  }, [playSound]);
  return <section className="min-h-screen w-full flex flex-col relative" id="home">
    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10 pointer-events-none">
      <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, I am Tong Wu <span className="waving-hand">👋</span></p>
      <h1 className="hero_tag text-gray_gradient">Building Products & Brands</h1>
    </div>
    <div className="w-full h-full absolute inset-0">
      <img src="/assets/hero-poster.png" alt="Tong Wu's creative desktop with a computer and keyboard" style={{ display: loaded ? 'none' : 'block' }} className="absolute left-[20%] top-[42%] w-[60%] h-[40%] object-contain" />
      <SceneBoundary onFailure={() => setLoaded(false)} key={attempt} onRetry={() => { setLoaded(false); setAttempt(n => n + 1); }}><Suspense fallback={null}><Scene attempt={attempt} onReady={setLoaded} /></Suspense></SceneBoundary>
    </div>
    <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center gap-4">
      <a href="#contact" className="btn !mx-0 !w-auto py-2 px-4">Contact</a>
      <button type="button" aria-pressed={playSound} onClick={() => setPlaySound(!playSound)} className="flex items-center gap-4 py-2 px-4 bg-black-200 text-white rounded">{playSound ? 'Mute Sound' : 'Play Sound'}</button>
    </div>
  </section>;
};
export default Hero;

