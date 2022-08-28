// escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF1DAFF); 
scene.fog = new THREE.Fog(0x87ACE5, 0.1, 8);
scene.fog = new THREE.Fog(0xEEEEEE, 0.1, 8);

var loader = new  THREE.TextureLoader();
loader.load(
    './imagenes-2/Universo.jpeg', function(texture){
     scene.background = texture;
    }
);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xEEEEEE,wireframe:true } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 50;

//animacion
function animate() {
    requestAnimationFrame( animate );
    sphere.rotation.x += 0.05;
    sphere.rotation.y += 0.01;
	sphere.rotation.z += 0.01;
    renderer.render( scene, camera );
}
animate();