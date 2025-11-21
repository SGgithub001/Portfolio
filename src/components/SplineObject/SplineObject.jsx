import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineObject() {
  return (
    <div className="spline-viewport">
      <div className="spline-container">
        <Suspense fallback={<div className="text-white text-center">Loading Robot...</div>}>
          <Spline 
            scene={import.meta.env.VITE_SPLINE_URL} 
          />
        </Suspense>
      </div>
    </div>
  );
}

