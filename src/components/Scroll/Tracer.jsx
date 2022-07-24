import React, { useEffect, useState } from 'react';

function Tracer() {
  const [progress, setProgress] = useState({ width: 0 });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollY / height) * 100;
      setProgress({ width: `${scrolled}%` });
    });
  }, []);

  return (
    <section className="ScrollTracer">
      <div className="Progress bg-blue-300 h-1" style={progress} />
    </section>
  );
}

export default Tracer;
