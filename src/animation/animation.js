import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let Mesh;
let light;
const canvas = document.querySelector('.doughnutMain')
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement)
    camera.position.set(0, 10, 20);
}
function setLight(){
    light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
}

function loadGLTF(){
    let doughnutLoader = new GLTFLoader();
    doughnutLoader.load ('/src/images/doughnut.glb'), function (gltf){
        Mesh = gltf.scene;
        Mesh.scale.set(0.2, 0.2, 0.2);
        scene.add(Mesh);
        Mesh.position.x = 0;
        Mesh.position.y = 10;
        Mesh.position.z = 15;
    
    }
}

function animate(){
    requestAnimationFrame(animate);
    if(Mesh && Mesh.rotation){
        MeshRotation.y -= 0.005;
    }
    renderer.render(scene, camera);
}

init();
setLight();
loadGLTF();
animate();