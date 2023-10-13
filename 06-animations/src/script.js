import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// clock

// const clock = new THREE.Clock();

// animations

// let time = Date.now();

gsap.to(mesh.position, {
  duration: 1,
  delay: 1,
  x: 2,
});

const tick = () => {
  // clock
  //   const elapsedTime = clock.getElapsedTime();

  //time
  //   const currentTime = Date.now();

  //   const deltaTime = currentTime - time;

  //   time = currentTime;

  //update objects

  //   mesh.position.x -= 0.01;
  //   mesh.rotation.y += 0.001 * deltaTime;
  //   mesh.rotation.y = elapsedTime * Math.PI * 2;

  //   camera.position.y = Math.sin(elapsedTime);
  //   camera.position.x = Math.cos(elapsedTime);

  //   camera.lookAt(mesh.position);

  renderer.render(scene, camera); // this is what renders the scene.
  window.requestAnimationFrame(tick);
};

tick();
