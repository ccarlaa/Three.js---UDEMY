const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0x000000
}

const renderer = new THREE.WebGLRenderer({
	antialias: true // envitar serrilhados
})

renderer.setPixelRatio(window.devicePixelRatio) // melhora o pixel ratio de acordo com a tela

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement)

// CRIANDO A CENA

const scene = new THREE.Scene()
scene.background = new THREE.Color(options.backgroundColor)

// const material = new THREE.MeshLambertMaterial({
//     color: 0xeb3468
// })


// CRIANDO A CAMERA

const camera = new THREE.PerspectiveCamera(50, options.width / options.height)

camera.position.x = 1.5
camera.position.y = 3.5
camera.position.z = 8.5

renderer.setAnimationLoop(() => { //chamada o máximo de vezes possível

    x3.tick()

    x3.fps(() => {
        renderer.render(scene,camera)
    })
})


const light = new THREE.HemisphereLight(
	0xFFFFBB, //cor de cima
    0x080820, // cor debaixo
	2 //intensidade
)

scene.add(light) // adicionando luz

// const path = new THREE.Path();
const path = new THREE.Shape();

path.moveTo(0.3, 1.5);
// path.lineTo(8,3);
// path.quadraticCurveTo(4,5,8,3) //(x,y, posição da linha)
// path.bezierCurveTo(1,5,6,1,8,3)
// path.lineTo(3,1);
// path.lineTo(1,1);
// path.lineTo(1,3);

//CORAÇÃO

path.quadraticCurveTo(0.3, 2.2, 0.9, 2.2)
path.quadraticCurveTo(1.3, 2.2, 1.4, 1.7)
path.quadraticCurveTo(1.5, 2.2, 1.9, 2.2)
path.quadraticCurveTo(2.5, 2.2, 2.5, 1.5)
path.quadraticCurveTo(2.5, 1.0, 1.4, 0.3)
path.quadraticCurveTo(0.3, 1.0, 0.3, 1.5)



// const geometry = new THREE.BufferGeometry();
// const geometry = new THREE.ShapeBufferGeometry(path);

const geometry = new THREE.ExtrudeBufferGeometry(
    path,
    {
        depth: 0.01, //profundidade
        bevelEnabled: true, //chanfro 
        bevelSize: 0.1, // tamanho do chanfro
        bevelThickness: 0.1 //espessura do chanfro
    }
)
// geometry.setFromPoints(path.getPoints()); //definir o formato

const material = new THREE.MeshLambertMaterial(
	{color: 0xeb3452, side: THREE.DoubleSide}
)

// const draw = new THREE.Line(geometry, material); //malha
const draw = new THREE.Mesh(geometry, material);

scene.add(draw)


const x3 = new THREEx3({
    THREE,
    OrbitControls: THREE.OrbitControls,
    camera,
    renderer,
    scene
})

// ADICIONA CONTROLES
x3.add(camera)
x3.add(light, {helper: {visible:false}})


