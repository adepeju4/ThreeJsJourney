const canvas = document.querySelector('.my-canvas');

// crete scene
const scene = new THREE.Scene();

// create red cube.

// 1. create geometry box

const geometry = new THREE.BoxGeometry(1, 1, 1);

// create the mesh
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material); // a mesh is created by the geometry and the material

// always add the mesh to the scene
scene.add(mesh);

// camera
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // first parameter is the field of view(vertically in degrees), second will be the aspect ratio;
camera.position.z = 3;
camera.position.x = 1.5;
scene.add(camera);

// renderer (a scene seen through your camera's point of view);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera); //it takes the camera and the scene
