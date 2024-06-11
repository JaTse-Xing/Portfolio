// ShaderMaterial.js
import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  #define S smoothstep

  uniform float iTime;
  uniform vec2 iResolution;
  varying vec2 vUv;

  vec4 Line(vec2 uv, float speed, float height, vec3 col) {
    uv.y += S(1., 0., abs(uv.x)) * sin(iTime * speed + uv.x * height) * .2;
    return vec4(S(.06 * S(.2, .9, abs(uv.x)), 0., abs(uv.y) - .004) * col, 1.0) * S(1., .3, abs(uv.x));
  }

  void main() {
    vec2 uv = (vUv - .5 * iResolution.xy) / iResolution.y;
    vec4 color = vec4(0.);
    for (float i = 0.; i <= 5.; i += 1.) {
      float t = i / 5.;
      color += Line(uv, 1. + t, 4. + t, vec3(.2 + t * .7, .2 + t * .4, 0.3));
    }
    gl_FragColor = color;
  }
`;

const MyShaderMaterial = shaderMaterial(
  { iTime: 0, iResolution: new THREE.Vector2(1, 1) },
  vertexShader,
  fragmentShader
);

extend({ MyShaderMaterial });

export { MyShaderMaterial };
