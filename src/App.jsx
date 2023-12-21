// App.js in your fluid-simulation-react library
import React from 'react';
import FluidAnimation, { defaultConfig } from './fluid-animation';


const FluidSimulation = ({ config = {} }) => {
  const mergedConfig = {...defaultConfig, ...config};
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <FluidAnimation opts={{ config: mergedConfig }} />
    </div>
  );
};

export default FluidSimulation;
