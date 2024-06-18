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


// const light = new THREE.HemisphereLight(
// 	0xFFFFFF, //cor de cima
//     0x080820, // cor debaixo
// 	0.9 //intensidade
// )

// scene.add(light) // adicionando luz

// const shadowLight = new THREE.PointLight(
//     0xffffff,
//     2,
//     10
// )

// shadowLight.position.y = 4

// shadowLight.castShadow = true

// scene.add(shadowLight)

// const shadowLight = new THREE.PointLight(
//     0xffffff,
//     2,
//     10
// )

// shadowLight.position.y = 4

// shadowLight.castShadow = true

// scene.add(shadowLight)

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({
        color: 0xabc423,
        side: THREE.DoubleSide
    })
)

cube.position.x = 1
cube.position.y = 1

cube.castShadow = true

scene.add(cube)

const sunLight = new THREE.DirectionalLight(
    0xffffff,
)

sunLight.position.y = 4

sunLight.castShadow = true
sunLight.target = cube

scene.add(sunLight)


const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,10),
    new THREE.MeshLambertMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    })
)

floor.rotation.x = THREE.MathUtils.degToRad(90)

floor.receiveShadow = true

scene.add(floor)

renderer.setAnimationLoop(() => { //chamada o máximo de vezes possível
    x3.tick()

    x3.fps(() => {
        renderer.render(scene,camera)
    })
})

renderer.shadowMap.enabled = true


const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene,
    },
    {
        grid: {visible: false},
        axes: {visible: false}
    }
)

// ADICIONA CONTROLES
x3.add(camera)
x3.add(cube)
// x3.add(light, {helper: {visible:false}})
x3.add(sunLight)


