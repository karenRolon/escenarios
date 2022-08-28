//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF5C3C3); 
scene.fog = new THREE.Fog(0xC3D4F5, 0.1, 8);

var loader = new  THREE.TextureLoader();
loader.load(
    '', function(texture){
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

const geometry = new THREE.ConeGeometry( 5, 20, 30 );
const material = new THREE.MeshBasicMaterial( {color: 0x87ACE5} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );


camera.position.z = 20;

//animacion
function animate() {
    requestAnimationFrame( animate );
    cone.rotation.x += 0.05;
    cone.rotation.y += 0.01;
	cone.rotation.z += 0.01;
    renderer.render( scene, camera );
}
animate();