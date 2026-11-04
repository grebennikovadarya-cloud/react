import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './ResizableBox.css';

function ResizableBox() {
  const boxRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const [useLayout, setUseLayout] = useState(false);

  const updateDimensions = () => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      console.log(`Считаны новые размеры: ${Math.round(width)}x${Math.round(height)}`);
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  };

  const useCustomEffect = useLayout ? useLayoutEffect : useEffect;

  useCustomEffect(() => {
    console.log(`--- Сработал ${useLayout ? 'useLayoutEffect' : 'useEffect'} ---`);
    
    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [useLayout]); 

  return (
    <div className="app-container">
      <div className="controls">
        <label>
          <input 
            type="checkbox" 
            checked={useLayout} 
            onChange={(e) => setUseLayout(e.target.checked)} 
          />
          Использовать useLayoutEffect
        </label>
      </div>

      <div ref={boxRef} className="resizable-box">
        Изменяй размер окна!
      </div>

      <p className="dimensions-text">
        Ширина: {dimensions.width}px, Высота: {dimensions.height}px
      </p>
    </div>
  );
}

export default ResizableBox;