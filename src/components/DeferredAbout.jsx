import { lazy, Suspense, useEffect, useRef, useState } from 'react';
const About = lazy(() => import('../sections/About.jsx'));
export default function DeferredAbout() {
  const ref=useRef(null);
  const [ready,setReady]=useState(false);
  useEffect(() => {
    const observer=new IntersectionObserver(([entry]) => { if(entry.isIntersecting){setReady(true);observer.disconnect();} },{rootMargin:'250px'});
    observer.observe(ref.current);
    return () => observer.disconnect();
  },[]);
  return <div id="about-anchor" ref={ref} style={{minHeight:650}}><Suspense fallback={<p className="c-space text-white-600">Loading about section…</p>}>{ready && <About />}</Suspense></div>;
}
