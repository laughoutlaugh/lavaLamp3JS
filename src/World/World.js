// Systems
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { createControls } from "./systems/controls";
import { Loop } from './systems/Loop';
import { createComposer } from "./systems/postProcessing";
import Stats from 'stats.js';
import { Composer } from "./systems/Composer";

// Components
import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { loadScene } from './components/Room/geometries';
import { Lamp } from "./components/Lamp/Lamp";

// module scoped parameters
let camera, renderer, scene, controls, loop, resizer, composer, bPass;

class World {
    constructor( container ) {
        // --=== Infrastructure ===--
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append( renderer.domElement ); // add canvas to container

        composer = new Composer( scene, camera, renderer );

        // --- Systems ---
        const stats = new Stats();
        stats.showPanel( 0 );
        container.append( stats.dom );

        loop = new Loop( camera, scene, renderer, stats );
        resizer = new Resizer( container, camera, renderer );
        controls = createControls( camera, renderer.domElement );

        //bPass = new DOF( scene, camera, renderer );
        loop.updatables.push( composer );

        // --=== Entities ===--

        // --- Room ---
        let roomMesh = null;
        loadScene(( sMesh ) => {
            roomMesh = sMesh;

            console.log( 'Scene received by World:', roomMesh );

            scene.add( roomMesh );
        });

        // --- Lamp ---
        const lampVideo = document.getElementById( 'video' );
        const lavaLamp = new Lamp( camera, loop, lampVideo );

        // --- Set Scene ---
        scene.add(
            lavaLamp,
            );
    }

    // --=== Scene Rendering ===--
    render() {  // render single frame
        renderer.render( scene, camera );
    }

    start() {   // initiate loop
        loop.start();
    }

    stop() {    // stop loop
        loop.stop();
    }
}

export { World };