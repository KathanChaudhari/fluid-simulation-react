// App.js in your fluid-simulation-react library
import React from 'react';
import FluidAnimation, { defaultConfig } from './fluid-animation';

const MyFluidAnimationComponent = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <FluidAnimation config={defaultConfig} />
    </div>
  );
};

export default MyFluidAnimationComponent;
