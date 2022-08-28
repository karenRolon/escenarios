//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x33C1FF); 
scene.fog = new THREE.Fog(0xfffff, 0.1, 10);


var loader = new  THREE.TextureLoader();
loader.load(
    '../imagenes/minnio.jpeg', function(texture){
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

const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0x73CFEC,wireframe:true} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 50;

//animacion
function animate() {
    requestAnimationFrame( animate );
    cylinder.rotation.x += 0.10;
    cylinder.rotation.y += 0.01;
	cylinder.rotation.z += 0.01;
    renderer.render( scene, camera );
}
animate();