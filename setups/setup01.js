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

// CRIANDO O OBJETO

const cubeGoemetry = new THREE.BoxBufferGeometry()

// const material = new THREE.MeshBasicMaterial({
//     color: 0xeb3468
// })

const material = new THREE.MeshLambertMaterial({
    color: 0xeb3468
})

const cube = new THREE.Mesh(cubeGoemetry, material)

cube.rotation.x = 90
cube.rotation.z = 90

scene.add(cube) // adicionando o objeto a cena

// CRIANDO A CAMERA

const camera = new THREE.PerspectiveCamera(50, options.width / options.height)

camera.position.z = 5

// RENDERIZANDO A CENA COM O OBJETO E A CAMERA
// renderer.render(scene,camera)

// RENDERIZANDO COM ANIMAÇÃO

renderer.setAnimationLoop(() => { //chamada o máximo de vezes possível
	renderer.render(scene,camera)
    cube.rotation.x += 0.01
	cube.rotation.z += 0.01
	cube.rotation.y += 0.01

    x3.tick()

    x3.fps(() => {
        renderer.render(scene,camera)
    })
})

// ADICIONANDO LUZ

// const light = new THREE.AmbientLight(
// 	0x1f70bc, //cor
// 	4 //intensidade
// )

const light = new THREE.HemisphereLight(
	0xFFFFBB, //cor de cima
    0x080820, // cor debaixo
	2 //intensidade
)

scene.add(light) // adicionando luz

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
x3.add(cube, {label: 'cube'})