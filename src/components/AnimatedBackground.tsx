import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
<ShaderGradient
  animate="on"
  axesHelper="on"
  bgColor1="#000000"
  bgColor2="#000000"
  brightness={1.1}
  cAzimuthAngle={180}
  cDistance={3.71}
  cPolarAngle={115}
  cameraZoom={1}
  color1="#03082e"
  color2="#000093"
  color3="#070038"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={40}
  frameRate={10}
  gizmoHelper="hide"
  grain="off"
  lightType="3d"
  pixelDensity={1}
  positionX={-0.5}
  positionY={0.1}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={24.6}
  reflection={0.1}
  rotationX={0}
  rotationY={0}
  rotationZ={235}
  shader="defaults"
  type="waterPlane"
  uAmplitude={0}
  uDensity={1.1}
  uFrequency={5.5}
  uSpeed={0.4}
  uStrength={2.4}
  uTime={24.6}
  wireframe={false}
/>
      </ShaderGradientCanvas>
    </div>
  );
};

export default AnimatedBackground;
