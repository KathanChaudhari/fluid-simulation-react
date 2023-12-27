import React from 'react';
import FluidAnimation, { defaultConfig } from './fluid-animation';

const FluidSimulation = ({ config = {}, color = null }) => {
  const mergedConfig = {...defaultConfig, ...config};

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <FluidAnimation 
        opts={{ config: mergedConfig, color: color }} 
      /> 
    </div>
  );
};

export default FluidSimulation;
