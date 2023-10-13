import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/*
  Cursor
*/

const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener('mousemove', (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = -(e.clientY / sizes.height - 0.5);
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(
  85,
  sizes.width / sizes.height,
  0.1, // near parameter
  100 // far parameter
);
//(field of view: it must be in degrees and also called fov.  aspect ration = width of render / height of render. )

// const { width, height } = sizes;

// const aspectRatio = width / height;

// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// ); // left, right, top, bottom
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 2;

camera.lookAt(mesh.position);
scene.add(camera);

//controls

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
// const clock = new THREE.Clock();

const tick = () => {
  // const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.rotation.y = elapsedTime;

  //update camera
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 5;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;

  // camera.lookAt(mesh.position);

  //update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
