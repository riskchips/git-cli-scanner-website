import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './PrismaticBurst.css';

const vertex = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const fragment = `#version 300 es
precision highp float;
out vec4 color;
uniform vec2 uResolution;
uniform float uTime;
uniform float uIntensity;
uniform float uSpeed;
uniform float uRayCount;

float hash(vec2 p) { return fract(sin(dot(floor(p), vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + 1.0), f.x), f.y);
}
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / min(uResolution.x, uResolution.y);
  float radius = length(uv);
  float angle = atan(uv.y, uv.x);
  float time = uTime * uSpeed;
  float rays = pow(0.5 + 0.5 * cos(angle * uRayCount + sin(time * 0.7) * 1.4 + radius * 5.0), 5.0);
  float textureNoise = noise(uv * 7.0 + time * 0.35);
  float falloff = smoothstep(1.05, 0.05, radius) * (0.55 + 0.45 * textureNoise);
  vec3 orange = vec3(1.0, 0.16, 0.015);
  vec3 blue = vec3(0.08, 0.2, 1.0);
  vec3 white = vec3(1.0);
  vec3 burst = mix(orange, blue, 0.5 + 0.5 * sin(angle * 2.0 + time));
  burst = mix(burst, white, pow(max(rays, 0.0), 3.0) * 0.55);
  float alpha = falloff * (0.18 + rays * 0.62) * uIntensity;
  color = vec4(burst * alpha, alpha);
}`;

export default function PrismaticBurst({ intensity = 1.4, speed = 0.5, rayCount = 24 }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return undefined;

    const renderer = new Renderer({ alpha: true, antialias: false, dpr: Math.min(window.devicePixelRatio || 1, 2) });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      uniforms: {
        uResolution: { value: [1, 1] },
        uTime: { value: 0 },
        uIntensity: { value: intensity },
        uSpeed: { value: speed },
        uRayCount: { value: rayCount }
      }
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
    container.appendChild(gl.canvas);

    const resize = () => {
      renderer.setSize(container.clientWidth || 1, container.clientHeight || 1);
      program.uniforms.uResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight];
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    let frame = 0;
    const start = performance.now();
    const render = now => {
      program.uniforms.uTime.value = (now - start) / 1000;
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      if (gl.canvas.parentNode === container) container.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [intensity, speed, rayCount]);

  return <div ref={ref} className="prismatic-burst-container" aria-hidden="true" />;
}
