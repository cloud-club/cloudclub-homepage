import React, { useEffect, useState } from 'react';

function Tracer() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollY / height) * 100;
      setProgress(scrolled);
    });
  }, []);

  return (
    <section className="ScrollTracer bg-white">
      <div className="Progress bg-blue-300 h-1" style={{ width: `${progress}%` }} />
    </section>
  );
}

export default Tracer;
