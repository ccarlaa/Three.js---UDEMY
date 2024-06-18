const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0x000000
}

const renderer = new THREE.WebGLRenderer({
	antialias: true 
})

renderer.shadowMap.enabled = true


renderer.setPixelRatio(window.devicePixelRatio)

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement)

// CRIANDO A CENA

const scene = new THREE.Scene()
scene.background = new THREE.Color(options.backgroundColor)


// CRIANDO A CAMERA

const camera = new THREE.PerspectiveCamera(50, options.width / options.height)

camera.position.x = 1.5
camera.position.y = 3.5
camera.position.z = 10

// LUZ

const light = new THREE.HemisphereLight(
	0xFFFFBB, //cor de cima
    0x080820, // cor debaixo
	0.2 //intensidade
)

scene.add(light) // adicionando luz

const spotLight = new THREE.SpotLight(
    0xffffff,
    2,
    5, //distancia
    0.5 // angulo
)

spotLight.position.y = 3
spotLight.position.x = 1

spotLight.castShadow = true
scene.add(spotLight) 

// CHÃO

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,10),
    new THREE.MeshPhongMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    })
)

floor.rotation.x = THREE.MathUtils.degToRad(90)

floor.receiveShadow = true
floor.position.y = -0.3

scene.add(floor)


// OBJETO

// --- VASO ---

const vase = new THREE.CylinderGeometry(0.25,0.15,0.5,50,50)
//radiusTop, radiusBase, height, radialSegments, heightSegments

scene.add(vase)

const materialVase = new THREE.MeshLambertMaterial(
    {color: 0xeb3254, side: THREE.DoubleSide}
)

const drawVase = new THREE.Mesh(vase, materialVase);

drawVase.castShadow = true

scene.add(drawVase)

// --- TRONCO --- //
    
const trunk = new THREE.CylinderGeometry(0.05,0.05,0.5)

scene.add(trunk)

const materialTrunk = new THREE.MeshLambertMaterial(
    {color: 0x7b410b, side: THREE.DoubleSide}
)

const drawTrunk = new THREE.Mesh(trunk, materialTrunk);

drawTrunk.position.y = 0.4
drawTrunk.castShadow = true

scene.add(drawTrunk)

// --- FOLHAS --- //

for(let x = 0; x < 10; x = x + 0.2) {

        const pathLeaves = new THREE.Shape()
    
        pathLeaves.moveTo(0, 1);
        
        pathLeaves.quadraticCurveTo(0, 0.2, 0.6, 0.6)
    
        const geometryLeaves = new THREE.ExtrudeBufferGeometry(
            pathLeaves,
            {
                depth: 0.01, //profundidade
                bevelEnabled: false, //chanfro 
            }
        )
        
        
        const materialLeaves = new THREE.MeshLambertMaterial(
            {color: 0xa4b653, side: THREE.DoubleSide }
        )
        
        const drawLeaves = new THREE.Mesh(geometryLeaves, materialLeaves)
        
        drawLeaves.rotation.y = x
        drawLeaves.castShadow = true

        scene.add(drawLeaves)
}


for(let x = 0; x < 10; x = x + 0.2) {

    const pathLeaves = new THREE.Shape()

    pathLeaves.moveTo(0, 1.2);
        
    pathLeaves.quadraticCurveTo(0, 0.4, 0.55, 0.8)


    const geometryLeaves = new THREE.ExtrudeBufferGeometry(
        pathLeaves,
        {
            depth: 0.01, //profundidade
            bevelEnabled: false, //chanfro 
        }
    )
    
    
    const materialLeaves = new THREE.MeshLambertMaterial(
        {color: 0xa4b653, side: THREE.DoubleSide }
    )
    
    const drawLeaves = new THREE.Mesh(geometryLeaves, materialLeaves)
    
    drawLeaves.rotation.y = x + 0.05
    drawLeaves.castShadow = true

    scene.add(drawLeaves)
}

for(let x = 0; x < 10; x = x + 0.2) {

    const pathLeaves = new THREE.Shape()

    pathLeaves.moveTo(0, 1.4);
        
    pathLeaves.quadraticCurveTo(0, 0.6, 0.45, 1)


    const geometryLeaves = new THREE.ExtrudeBufferGeometry(
        pathLeaves,
        {
            depth: 0.01, //profundidade
            bevelEnabled: false, //chanfro 
        }
    )
    
    
    const materialLeaves = new THREE.MeshLambertMaterial(
        {color: 0xa4b653, side: THREE.DoubleSide }
    )
    
    const drawLeaves = new THREE.Mesh(geometryLeaves, materialLeaves)
    
    drawLeaves.rotation.y = x + 0.1
    drawLeaves.castShadow = true

    scene.add(drawLeaves)
}


for(let x = 0; x < 10; x = x + 0.2) {

    const pathLeaves = new THREE.Shape()

    pathLeaves.moveTo(0, 1.6);
        
    pathLeaves.quadraticCurveTo(0, 0.8, 0.35, 1.2)


    const geometryLeaves = new THREE.ExtrudeBufferGeometry(
        pathLeaves,
        {
            depth: 0.01, //profundidade
            bevelEnabled: false, //chanfro 
        }
    )
    
    
    const materialLeaves = new THREE.MeshLambertMaterial(
        {color: 0xa4b653, side: THREE.DoubleSide }
    )
    
    const drawLeaves = new THREE.Mesh(geometryLeaves, materialLeaves)
    
    drawLeaves.rotation.y = x + 0.15
    drawLeaves.castShadow = true

    scene.add(drawLeaves)

}

// --- ESTRELA ---

const pathStar = new THREE.Shape()

pathStar.moveTo(0, 1.84);
    
pathStar.lineTo(-0.06, 1.75);
pathStar.lineTo(-0.285, 1.75);
pathStar.lineTo(-0.135, 1.69);
pathStar.lineTo(-0.21, 1.6);
pathStar.lineTo(-0.21, 1.6);
pathStar.lineTo(0, 1.66);


pathStar.lineTo(0.21, 1.6);
pathStar.lineTo(0.135, 1.69);
pathStar.lineTo(0.285, 1.75);
pathStar.lineTo(0.06, 1.75);



const geometryStar = new THREE.ExtrudeBufferGeometry(
    pathStar,
    {
        depth: 0.01, //profundidade
        bevelEnabled: true, //chanfro 
        bevelSize: 0.01, // tamanho do chanfro
        bevelThickness: 0.01 //espessura do chanfro
    }
)


const materialStar = new THREE.MeshPhongMaterial(
    {color: 0xf2e021, side: THREE.DoubleSide }
)

const drawStar = new THREE.Mesh(geometryStar, materialStar)
drawStar.castShadow = true

scene.add(drawStar)

//ANIMAÇÃO

renderer.setAnimationLoop(() => { //chamada o máximo de vezes possível
	renderer.render(scene,camera)
	drawStar.rotation.y += 0.015

    
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
x3.add(drawVase, {label: 'Vaso'})
x3.add(drawTrunk, {label: 'tronco'})
x3.add(spotLight)