//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xD97CF1); 
scene.fog = new THREE.Fog(0xFEF5E4, 5, 5);

var loader = new  THREE.TextureLoader();
loader.load(
    '../imagenes-4/universo.jpg', function(texture){
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

const geometry = new THREE.TorusKnotGeometry( 15, 3, 30, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0xF5E4C3 } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

camera.position.z =60;

//animacion
function animate() {
    requestAnimationFrame( animate );
    torusKnot.rotation.x += 0.02;
    torusKnot.rotation.y += 0.01;
	torusKnot.rotation.z += 0.01;
    renderer.render( scene, camera );
}
animate();