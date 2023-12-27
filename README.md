# fluid-simulation-react

fluid-simulation-react is a simple yet captivating React component based on WebGL fluid simulation. It provides an easy way to integrate fluid-like animations into your React applications, offering beautiful interaction with minimal setup.

## Installation

To use fluid-simulation-react in your project, you can install it via npm:

## `npm install fluid-simulation-react`


# Usage


To integrate the fluid simulation into your React application, simply import and use the FluidSimulation component:


```
import React from 'react';
import FluidSimulation from 'fluid-simulation-react';

const MyComponent = () => {
  return <FluidSimulation />;
};

export default MyComponent;

```


**Custom Configuration and color**


fluid-simulation-react allows you to customize the fluid simulation behavior through a config prop. Here is how you can use it:

```
import React from 'react';
import FluidSimulation from 'fluid-simulation-react';

const MyComponent = () => {
  const customConfig = {
    textureDownsample: 2,
    densityDissipation: 0.80,
  };
   const customColors = [
    [1, 1, 0], // Yellow
    [0, 1, 1]  // Cyan
  ]

  return <FluidSimulation config={customConfig} color={customColors}/>;
};

export default MyComponent;

```

**Default Configuration**


The default configuration for fluid-simulation-react is as follows:

```
const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005,
};

const color = [
            Math.random() + 0.2,
            Math.random() + 0.2,
            Math.random() + 0.2,
          ];
```

You can override any of these settings with your own values in the customConfig and you can choose one or muliple color, In that case expect onmove  color will be from that only(randomly for multiple color)


# **Plans for future** updates include:

    - Allowing users to choose colors dynamically based on cursor movement = DONE.

    - Options for cursor movement or click effects.

    - More customizable settings and options.

## **Contributing**

For a better understanding of the component or if you wish to contribute, please check out the GitHub repository:

[fluid-simulation-react](https://github.com/KathanChaudhari/fluid-simulation-react) on GitHub.

ping me on discord: kiyo07

Thanks for Trying this(Or atleast for reading, do try it out share me where do I need to imporve).