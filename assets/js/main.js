import * as THREE from "/assets/js/three.module";
import {OrbitControls} from "/assets/js/OrbitControls";

const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xcccccc);
scene.background = new THREE.Color( 0xccccff );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

const ambientLight = new THREE.AmbientLight(0x111111);//change to 0x111111 later
scene.add(ambientLight);

const candle = new THREE.PointLight( 0xff9329, 5, 1000);
candle.position.set( 2.5, 1.5, -2.5 );
scene.add( candle );

const overheadLight = new THREE.SpotLight(0xf4fffa, 10,500,Math.PI/4, 0,2);
overheadLight.rotation.z = Math.PI / 2;
overheadLight.position.set( -2.5, 2.6, -0.25 );
scene.add( overheadLight );

const targetObject = new THREE.Object3D();
targetObject.position.set(-2.5, 0, -0.25 )
scene.add(targetObject);

overheadLight.target = targetObject;


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

const sinkDiff = new THREE.TextureLoader().load("assets/textures/nonPBR_textures/sink.jpg");
const hobDiff= new THREE.TextureLoader().load("assets/textures/nonPBR_textures/hob.jpg");
const refDiff = new THREE.TextureLoader().load("assets/textures/nonPBR_textures/ref.jpg");

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
const counterbasematerial = new THREE.MeshPhongMaterial({map: wallDiff, normalMap: wallNormal, roughnessMap: wallRough });
const counterbase = new THREE.Mesh( counterbasegeometry, counterbasematerial );
counterbase.castShadow = true;
counterbase.receiveShadow = true;
counterbase.rotation.y = Math.PI / 4;
counterbase.position.x = 2.5;
counterbase.position.y = -0.3;
counterbase.position.z = -2.5;
scene.add( counterbase );

const counter2geometry = new THREE.BoxGeometry( 4, 1, 0.2, 16 );
const counter2material = new THREE.MeshStandardMaterial({map: counterDiff, normalMap:counterNormal, roughnessMap: counterRough});
const counter2 = new THREE.Mesh( counter2geometry, counter2material );
counter2.castShadow = true;
counter2.receiveShadow = true;
counter2.rotation.x = Math.PI / 2;
counter2.rotation.z = Math.PI / 4;
counter2.position.x = -3.35;
counter2.position.y = 0.1;
counter2.position.z = 1;
scene.add( counter2 );
const counterbase2geometry = new THREE.BoxGeometry( 4, 1, 1, 16 );
const counterbase2material = new THREE.MeshStandardMaterial({map: wallDiff, normalMap: wallNormal, roughnessMap: wallRough });
const counterbase2 = new THREE.Mesh( counterbase2geometry, counterbase2material );
counterbase2.castShadow = true;
counterbase2.receiveShadow = true;
counterbase2.rotation.x = Math.PI / 2;
counterbase2.rotation.z = Math.PI / 4;
counterbase2.position.x = -3.35;
counterbase2.position.y =-0.5;
counterbase2.position.z = 1;
scene.add( counterbase2 );

const counter3geometry = new THREE.BoxGeometry( 2, 1, 0.2, 16 );
const counter3material = new THREE.MeshStandardMaterial({map: counterDiff, normalMap:counterNormal, roughnessMap: counterRough});
const counter3 = new THREE.Mesh( counter3geometry, counter3material );
counter3.castShadow = true;
counter3.receiveShadow = true;
counter3.rotation.x = Math.PI / 2;
counter3.rotation.z = -Math.PI / 4;
counter3.position.x = -2;
counter3.position.y = 0.1;
counter3.position.z = -2.25;
scene.add( counter3 );
const counterbase3geometry = new THREE.BoxGeometry( 2, 1, 1, 16 );
const counterbase3material = new THREE.MeshStandardMaterial({map: wallDiff, normalMap: wallNormal, roughnessMap: wallRough });
const counterbase3 = new THREE.Mesh( counterbase3geometry, counterbase3material );
counterbase3.castShadow = true;
counterbase3.receiveShadow = true;
counterbase3.rotation.y = Math.PI / 4;
counterbase3.position.x = -2;
counterbase3.position.y =-0.5;
counterbase3.position.z = -2.25;
scene.add( counterbase3 );

const sinkgeometry = new THREE.PlaneGeometry(2,1,1,1);
const sinkmaterial = new THREE.MeshPhongMaterial({map: sinkDiff});
const sink = new THREE.Mesh( sinkgeometry, sinkmaterial );
sink.rotation.x = -Math.PI / 2;
sink.rotation.z = Math.PI / 4;
sink.position.x = -3.25;
sink.position.y =0.19;
sink.position.z = -1;
scene.add(sink);

const refGeometry = new THREE.BoxGeometry( 1.5, 3.5, 1 );
const refMaterial = new THREE.MeshStandardMaterial({color:0xc0c0c0, metalness: 1.0});
const ref = new THREE.Mesh( refGeometry, refMaterial );
ref.castShadow = true;
ref.receiveShadow = true;
ref.rotation.y = Math.PI / 4;
ref.position.x = -0.5;
ref.position.y = 0.35;
ref.position.z = -3.75;
scene.add( ref );
const reffacegeometry = new THREE.PlaneGeometry(1.5,3.5,1,1);
const reffacematerial = new THREE.MeshPhongMaterial({map: refDiff});
const refface = new THREE.Mesh( reffacegeometry,reffacematerial );
refface.rotation.y = Math.PI / 4;
refface.position.x = -0.1;
refface.position.y =0.35;
refface.position.z = -3.35;
scene.add(refface);

const hobgeometry = new THREE.PlaneGeometry(1.5,1,1,1);
const hobmaterial = new THREE.MeshPhongMaterial({map: hobDiff});
const hob = new THREE.Mesh( hobgeometry,hobmaterial );
hob.rotation.x = -Math.PI / 2;
hob.rotation.z = -Math.PI / 4;
hob.position.x = 2.5;
hob.position.y =0.19;
hob.position.z = -5.5;
scene.add(hob);
const hobbasegeometry = new THREE.BoxGeometry( 1, 1.25, 1.5, 16 );
const hobbasematerial = new THREE.MeshStandardMaterial({metalness: 1.0});
const hobbase = new THREE.Mesh( hobbasegeometry, hobbasematerial );
hobbase.castShadow = true;
hobbase.receiveShadow = true;
hobbase.rotation.y = Math.PI / 4;
hobbase.position.x = 2.5;
hobbase.position.y =-0.5;
hobbase.position.z = -5.5;
scene.add( hobbase );

const chairgeometry = new THREE.BoxGeometry( 0.75, 0.25, 0.75, 16 );
const chairmaterial = new THREE.MeshLambertMaterial( {color: 0x482029,fog: true} );
const chair = new THREE.Mesh( chairgeometry, chairmaterial );
chair.castShadow = true;
chair.receiveShadow = true;
chair.rotation.y = Math.PI / 4;
chair.position.x = 1.5;
chair.position.y = 0;
chair.position.z = 0;
scene.add(chair );
const chairleg1Geometry = new THREE.BoxGeometry( 0.05, 1, 0.05 );
const chairleg1Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const chairleg1 = new THREE.Mesh( chairleg1Geometry, chairleg1Material );
chairleg1.castShadow = true;
chairleg1.receiveShadow = true;
chairleg1.position.x = 1.5;
chairleg1.position.y = -0.5;
chairleg1.position.z = 0;
scene.add( chairleg1 );
const chairsupp1Geometry = new THREE.BoxGeometry( 0.05, 0.25, 0.05 );
const chairsupp1Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const chairsupp1 = new THREE.Mesh( chairsupp1Geometry, chairsupp1Material );
chairsupp1.castShadow = true;
chairsupp1.receiveShadow = true;
chairsupp1.position.x = 1.55
chairsupp1.position.y = 0.25;
chairsupp1.position.z = 0.35;
scene.add( chairsupp1 );
const chairsupp2Geometry = new THREE.BoxGeometry( 0.05, 0.25, 0.05 );
const chairsupp2Material = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const chairsupp2 = new THREE.Mesh( chairsupp2Geometry, chairsupp2Material );
chairsupp2.castShadow = true;
chairsupp2.receiveShadow = true;
chairsupp2.position.x = 1.85;
chairsupp2.position.y = 0.25;
chairsupp2.position.z = 0.05;
scene.add( chairsupp2 );
const chairsupp3geometry = new THREE.BoxGeometry( 0.1, 0.4, 0.55, 16 );
const chairsupp3material = new THREE.MeshLambertMaterial( {color: 0x482029,fog: true} );
const chairsupp3 = new THREE.Mesh( chairsupp3geometry, chairsupp3material );
chairsupp3.castShadow = true;
chairsupp3.receiveShadow = true;
chairsupp3.rotation.y = -Math.PI / 4;
chairsupp3.position.x = 1.70;
chairsupp3.position.y = 0.5;
chairsupp3.position.z = 0.20;
scene.add( chairsupp3 );
const chairsupp4geometry = new THREE.CylinderGeometry(0.25,0.25,0.05,16);
const chairsupp4material = new THREE.MeshLambertMaterial({color:0x808080});
const chairsupp4 = new THREE.Mesh( chairsupp4geometry, chairsupp4material );
chairsupp4.castShadow = true;
chairsupp4.receiveShadow = true;
chairsupp4.rotation.y = Math.PI / 4;
chairsupp4.position.x = 1.55;
chairsupp4.position.y = -1;
chairsupp4.position.z = 0;
scene.add( chairsupp4 );

const candlestickgeometry = new THREE.CylinderGeometry(0.05,0.05,0.5,16);
const candlestickmaterial = new THREE.MeshLambertMaterial({color:0xf2f7e0});
const candlestick = new THREE.Mesh( candlestickgeometry, candlestickmaterial );
candlestick.castShadow = true;
candlestick.receiveShadow = true;
candlestick.rotation.y = Math.PI / 4;
candlestick.position.x = 2.5;
candlestick.position.y = 0.9;
candlestick.position.z = -2.5;
scene.add( candlestick );

const lampgeometry = new THREE.CylinderGeometry( 0.095, 0.25, 0.3, 4 );
const lampmaterial = new THREE.MeshLambertMaterial( {color: 0x000000} );
const lamp = new THREE.Mesh( lampgeometry, lampmaterial );
lamp.castShadow = true;
lamp.receiveShadow = true;
lamp.position.x = -2.50;
lamp.position.y = 2.5;
lamp.position.z = -0.25;
scene.add( lamp );
const lampwiregeometry = new THREE.CylinderGeometry(0.01,0.01,0.5,16);
const lampwirematerial = new THREE.MeshLambertMaterial({color:0x000000});
const lampwire = new THREE.Mesh( lampwiregeometry, lampwirematerial );
lampwire.castShadow = true;
lampwire.receiveShadow = true;
lampwire.rotation.y = Math.PI / 4;
lampwire.position.x = -2.5;
lampwire.position.y = 2.75;
lampwire.position.z = -0.25;
scene.add( lampwire );

camera.position.z = 5;
camera.position.y =5;
camera.rotation.x = -Math.PI / 4;

function animate() {
    renderer.render( scene, camera );
}