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

// const cubeGoemetry = new THREE.BoxBufferGeometry()

// const material = new THREE.MeshBasicMaterial({
//     color: 0xeb3468
// })

const material = new THREE.MeshLambertMaterial({
    color: 0xeb3468
})

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
        1,1,1
    ), 
    material)

scene.add(cube)

const circle = new THREE.Mesh(
    new THREE.CircleBufferGeometry(0.5, 20, 20)
)

circle.position.x = -2
circle.rotation.x = THREE.MathUtils.degToRad(-90)

scene.add(circle)

const cone = new THREE.Mesh(
    new THREE.ConeBufferGeometry(0.3, 0.5),
    material
)

cone.position.y = 2

scene.add(cone)

const cylinder = new THREE.Mesh(
    // raio de cima, raio de baixo, altura
    new THREE.CylinderBufferGeometry(0.3, 0.3,  0.5),
    material
)

cylinder.position.x = 2

scene.add(cylinder)// adicionando o objeto a cena

const plane = new THREE.Mesh(
    // altura, largura
    new THREE.PlaneBufferGeometry(1, 1),
    material
)

plane.position.x = 4
plane.position.y = 0

scene.add(plane)// adicionando o objeto a cena

const sphere = new THREE.Mesh(
    // radius, width segments, height segments
    new THREE.SphereBufferGeometry(0.3, 20, 1),
    material
)

sphere.position.x = 2
sphere.position.y = 2

scene.add(sphere)// adicionando o objeto a cena



// CRIANDO A CAMERA

const camera = new THREE.PerspectiveCamera(50, options.width / options.height)

camera.position.x = 1.5
camera.position.y = 3.5
camera.position.z = 8.5


// RENDERIZANDO A CENA COM O OBJETO E A CAMERA
// renderer.render(scene,camera)

// RENDERIZANDO COM ANIMAÇÃO

renderer.setAnimationLoop(() => { //chamada o máximo de vezes possível
	renderer.render(scene,camera)
    // cube.rotation.x += 0.01
	// cube.rotation.z += 0.01
	// cube.rotation.y += 0.01

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
x3.add(circle, {label: 'circle'})
x3.add(cone, {label: 'cone'})
x3.add(cone, {label: 'esfera'})


