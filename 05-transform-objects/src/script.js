import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

const group = new THREE.Group();

scene.add(group);

group.position.y = 0.5;

group.scale.y = 2;
group.rotation.y = 1;

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'fff' })
);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

group.add(cube1);
group.add(cube2);
group.add(cube3);

cube1.position.set(-1.5, 0, 0.2);
cube2.position.set(0, 0, 0.2);
cube3.position.set(1.5, 0, 0.2);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// //mesh.position.set(0.7, -0.6, 1); '<== one liner for 16,17,18.

// //scale
// // mesh.scale.x = 2;
// // mesh.scale.y = 0.5;
// // mesh.scale.z = 0.5;

// mesh.scale.set(2, 0.5, 0.5);
// //Axes helper

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

// helps in positioning objects.

//ROTATION

// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI * 0.25; //pi IS  HALF OF THE ROTATION
// mesh.rotation.y = Math.PI * 0.25; //pi IS  HALF OF THE ROTATION
/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//camera.lookAt(mesh.position);

//IMPORTANT

// console.log(
//   mesh.position.length(),
//   '<== distance between the mesh and the center of the screen',
//   mesh.position.distanceTo(camera.position),
//   '<== distance between the object and the camera'
//   // mesh.position.normalize(), normalize will take your vector length and reduce it until it is is 1.
// );

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
