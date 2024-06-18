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


// CRIANDO A CAMERA

const camera = new THREE.PerspectiveCamera(50, options.width / options.height)

camera.position.x = 1.5
camera.position.y = 3.5
camera.position.z = 8.5


const light = new THREE.HemisphereLight(
	0xFFFFBB, //cor de cima
    0x080820, // cor debaixo
	2 //intensidade
)

scene.add(light) // adicionando luz

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    })
)

cube.position.x = 1
cube.position.y = 1

scene.add(cube)

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,10),
    new THREE.MeshLambertMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    })
)

scene.add(floor)

floor.rotation.x = THREE.MathUtils.degToRad(90)

renderer.setAnimationLoop(() => { //chamada o máximo de vezes possível
    x3.tick()

    x3.fps(() => {
        renderer.render(scene,camera)
    })
})


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


