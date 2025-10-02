import * as THREE from "/assets/js/three.module";
import {OrbitControls} from "/assets/js/OrbitControls";

const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xcccccc);
scene.background = new THREE.Color( 0xccccff );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

const ambientLight = new THREE.AmbientLight(0xffffff);//change to 0x111111 later
scene.add(ambientLight);

// const candle = new THREE.PointLight( 0xff9329, 10, 1000);
// candle.position.set( 0, .75, 2 );
// scene.add( candle );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const cameraControl = new OrbitControls(camera, renderer.domElement);

const woodDiff = new THREE.TextureLoader().load("assets/textures/woodFloor_textures/wood_floor_diff_1k.jpg");
const woodAO = new THREE.TextureLoader().load("assets/textures/woodFloor_textures/wood_floor_ao_1k.jpg");
const woodDisp = new THREE.TextureLoader().load("assets/textures/woodFloor_textures/wood_floor_disp_1k.jpg");
const woodNormal = new THREE.TextureLoader().load("assets/textures/woodFloor_textures/wood_floor_nor_gl_1k.jpg");
const woodRough = new THREE.TextureLoader().load("assets/textures/woodFloor_textures/wood_floor_rough_1k.jpg");

const wallDiff = new THREE.TextureLoader().load("assets/textures/wall_textures/Plaster001_1K-JPG_Color.jpg");
const wallNormal = new THREE.TextureLoader().load("assets/textures/wall_textures/Plaster001_1K-JPG_NormalGL.jpg");
const wallRough = new THREE.TextureLoader().load("assets/textures/wall_textures/Plaster001-Rough.jpg");

const counterDiff = new THREE.TextureLoader().load("assets/textures/counter_textures/Marble016_1K-JPG_Color.jpg");
const counterNormal = new THREE.TextureLoader().load("assets/textures/counter_textures/Marble016_1K-JPG_NormalGL.jpg");
const counterRough = new THREE.TextureLoader().load("assets/textures/counter_textures/Marble016_1K-JPG_Roughness.jpg");


const leftWallGeometry = new THREE.BoxGeometry( 10, 4, 0.5 );
const leftWallMaterial = new THREE.MeshStandardMaterial({map: wallDiff, normalMap: wallNormal, roughnessMap: wallRough });
const leftWall = new THREE.Mesh( leftWallGeometry, leftWallMaterial );
leftWall.castShadow = true;
leftWall.receiveShadow = true;
leftWall.rotation.y = Math.PI / 4;
leftWall.position.x = -1.6;
leftWall.position.y = 0.95;
leftWall.position.z = -3.6;
scene.add( leftWall );

const windowWallGeometry = new THREE.BoxGeometry( 7, 4, 0.5 );
const windowWallMaterial = new THREE.MeshStandardMaterial({map: wallDiff, normalMap: wallNormal, roughnessMap: wallRough });
const windowWall = new THREE.Mesh( windowWallGeometry, windowWallMaterial );
windowWall.castShadow = true;
windowWall.receiveShadow = true;
windowWall.rotation.y = -Math.PI / 4;
windowWall.position.x = 4.5;
windowWall.position.y = 0.95;
windowWall.position.z = -4.5;
scene.add( windowWall );

const floorGeometry = new THREE.BoxGeometry( 7, 10, 0.5 );
const floorMaterial = new THREE.MeshStandardMaterial({map: woodDiff, normalMap:woodNormal, aoMap:woodAO, displacementMap: woodDisp, roughnessMap: woodRough});
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.castShadow = true;
floor.receiveShadow = true;
floor.rotation.x = Math.PI / 2;
floor.rotation.z = Math.PI / 4;
floor.position.x = 1;
floor.position.y = -1.25;
floor.position.z = -1;
scene.add( floor );

const counterGeometry = new THREE.BoxGeometry( 6, 1.5, 0.25 );
const counterMaterial = new THREE.MeshStandardMaterial({map: counterDiff, normalMap:counterNormal, roughnessMap: counterRough});
const counter = new THREE.Mesh( counterGeometry, counterMaterial );
counter.castShadow = true;
counter.receiveShadow = true;
counter.rotation.x = Math.PI / 2;
counter.rotation.z = -Math.PI / 4;
counter.position.x = 2.5;
counter.position.y = 0.5;
counter.position.z = -2.5;
scene.add( counter );
const counterbasegeometry = new THREE.BoxGeometry( 5.5, 1.5, 1, 16 );
const counterbasematerial = new THREE.MeshStandardMaterial({map: wallDiff, normalMap: wallNormal, roughnessMap: wallRough });
const counterbase = new THREE.Mesh( counterbasegeometry, counterbasematerial );
counterbase.castShadow = true;
counterbase.receiveShadow = true;
counterbase.rotation.y = Math.PI / 4;
counterbase.position.x = 2.5;
counterbase.position.y = -0.3;
counterbase.position.z = -2.5;
scene.add( counterbase );

const tableleg1Geometry = new THREE.BoxGeometry( 0.1, 0.7, 0.1 );
const tableleg1Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const tableleg1 = new THREE.Mesh( tableleg1Geometry, tableleg1Material );
tableleg1.castShadow = true;
tableleg1.receiveShadow = true;
tableleg1.position.x = 2.1;
tableleg1.position.y = -0.89;
tableleg1.position.z = 2.95;
scene.add( tableleg1 );
const tableleg2Geometry = new THREE.BoxGeometry( 0.1, 0.7, 0.1 );
const tableleg2Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const tableleg2 = new THREE.Mesh( tableleg2Geometry, tableleg2Material );
tableleg2.castShadow = true;
tableleg2.receiveShadow = true;
tableleg2.position.x = 1.6;
tableleg2.position.y = -0.89;
tableleg2.position.z = 2.95;
scene.add( tableleg2 );
const tableleg3Geometry = new THREE.BoxGeometry( 0.1, 0.7, 0.1 );
const tableleg3Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const tableleg3 = new THREE.Mesh( tableleg3Geometry, tableleg3Material );
tableleg3.castShadow = true;
tableleg3.receiveShadow = true;
tableleg3.position.x = 1.6;
tableleg3.position.y = -0.89;
tableleg3.position.z = 2.05;
scene.add( tableleg3 );
const tableleg4Geometry = new THREE.BoxGeometry( 0.1, 0.7, 0.1 );
const tableleg4Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const tableleg4 = new THREE.Mesh( tableleg4Geometry, tableleg4Material );
tableleg4.castShadow = true;
tableleg4.receiveShadow = true;
tableleg4.position.x = 2.1;
tableleg4.position.y = -0.89;
tableleg4.position.z = 2.05;
scene.add( tableleg4 );

// reuse into refrigerator
// const doorGeometry = new THREE.BoxGeometry( 1, 1.9, 0.01 );
// const doorMaterial = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
// const door = new THREE.Mesh( doorGeometry, doorMaterial );
// door.castShadow = true;
// door.receiveShadow = true;
// door.rotation.y = Math.PI / 2;
// door.position.x = 2.25;
// door.position.y = -0.1;
// door.position.z = 1;
// scene.add( door );
// const handlegeometry = new THREE.SphereGeometry( 0.05,16,5);
// const handlematerial = new THREE.MeshLambertMaterial( { color: 0xFFD700 } );
// const handle = new THREE.Mesh( handlegeometry, handlematerial );
// handle.castShadow = true;
// handle.receiveShadow = true;
// handle.rotation.y = Math.PI/4;
// handle.position.x = 2.24;
// handle.position.y = -0.1;
// handle.position.z = 1.35;
// scene.add( handle );

const chairgeometry = new THREE.BoxGeometry( 0.35, 0.1, 0.35, 16 );
const chairmaterial = new THREE.MeshBasicMaterial( {color: 0x482029,fog: true} );
const chair = new THREE.Mesh( chairgeometry, chairmaterial );
chair.castShadow = true;
chair.receiveShadow = true;
chair.position.x = 1.5;
chair.position.y = -0.75;
chair.position.z = 2.5;
scene.add( chair );
const chairleg1Geometry = new THREE.BoxGeometry( 0.05, 0.5, 0.05 );
const chairleg1Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const chairleg1 = new THREE.Mesh( chairleg1Geometry, chairleg1Material );
chairleg1.castShadow = true;
chairleg1.receiveShadow = true;
chairleg1.position.x = 1.6;
chairleg1.position.y = -1;
chairleg1.position.z = 2.6;
scene.add( chairleg1 );
const chairleg2Geometry = new THREE.BoxGeometry( 0.05, 0.5, 0.05 );
const chairleg2Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const chairleg2 = new THREE.Mesh( chairleg2Geometry, chairleg2Material );
chairleg2.castShadow = true;
chairleg2.receiveShadow = true;
chairleg2.position.x = 1.4;
chairleg2.position.y = -1;
chairleg2.position.z = 2.6;
scene.add( chairleg2 );
const chairleg3Geometry = new THREE.BoxGeometry( 0.05, 0.5, 0.05 );
const chairleg3Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const chairleg3 = new THREE.Mesh( chairleg3Geometry, chairleg3Material );
chairleg3.castShadow = true;
chairleg3.receiveShadow = true;
chairleg3.position.x = 1.4;
chairleg3.position.y = -1;
chairleg3.position.z = 2.4;
scene.add( chairleg3 );
const chairleg4Geometry = new THREE.BoxGeometry( 0.05, 0.5, 0.05 );
const chairleg4Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const chairleg4 = new THREE.Mesh( chairleg4Geometry, chairleg4Material );
chairleg4.castShadow = true;
chairleg4.receiveShadow = true;
chairleg4.position.x = 1.6;
chairleg4.position.y = -1;
chairleg4.position.z = 2.4;
scene.add( chairleg4 );
const chairsupp1Geometry = new THREE.BoxGeometry( 0.05, 0.1, 0.05 );
const chairsupp1Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const chairsupp1 = new THREE.Mesh( chairsupp1Geometry, chairsupp1Material );
chairsupp1.castShadow = true;
chairsupp1.receiveShadow = true;
chairsupp1.position.x = 1.4;
chairsupp1.position.y = -0.65;
chairsupp1.position.z = 2.4;
scene.add( chairsupp1 );
const chairsupp2Geometry = new THREE.BoxGeometry( 0.05, 0.1, 0.05 );
const chairsupp2Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const chairsupp2 = new THREE.Mesh( chairsupp2Geometry, chairsupp2Material );
chairsupp2.castShadow = true;
chairsupp2.receiveShadow = true;
chairsupp2.position.x = 1.4;
chairsupp2.position.y = -0.65;
chairsupp2.position.z = 2.6;
scene.add( chairsupp2 );
const chairsupp3geometry = new THREE.BoxGeometry( 0.1, 0.4, 0.25, 16 );
const chairsupp3material = new THREE.MeshBasicMaterial( {color: 0x482029,fog: true} );
const chairsupp3 = new THREE.Mesh( chairsupp3geometry, chairsupp3material );
chairsupp3.castShadow = true;
chairsupp3.receiveShadow = true;
chairsupp3.rotation.x = Math.PI / 2;
chairsupp3.position.x = 1.4;
chairsupp3.position.y = -0.5;
chairsupp3.position.z = 2.5;
scene.add( chairsupp3 );

// reuse into overhead lamp
// const monitorgeometry = new THREE.CylinderGeometry( 0.095, 0.25, 0.3, 4 );
// const monitormaterial = new THREE.MeshBasicMaterial( {color: 0x32527B,fog: true} );
// const monitor = new THREE.Mesh( monitorgeometry, monitormaterial );
// monitor.castShadow = true;
// monitor.receiveShadow = true;
// monitor.rotation.x = Math.PI/4;
// monitor.rotation.z = -Math.PI/2;
// monitor.position.x = 2.1;
// monitor.position.y = -0.11;
// monitor.position.z = 2.5;
// scene.add( monitor );


camera.position.z = 5;
camera.position.y = 2.5;
camera.rotation.x = -Math.PI / 6;

function animate() {
    renderer.render( scene, camera );
}