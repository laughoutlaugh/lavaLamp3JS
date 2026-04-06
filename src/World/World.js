// Systems
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { createControls } from "./systems/controls";
import { Loop } from './systems/Loop.js';

// Components
import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createGridHelper } from "./components/helpers";
import { Lamp } from './components/Lamp/Lamp';

// module scoped parameters
let camera, renderer, scene, controls, loop;

class World {
    // create instance of World app
    constructor( container ) {
        // --- Infrastructure ---
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append( renderer.domElement ); // add canvas to container
        loop = new Loop( camera, scene, renderer );

        // --- Entities ---
        const { grid, axes } = createGridHelper();
        const lamp = new Lamp();

        // --- OrbitControls ---
        controls = createControls( camera, renderer.domElement );

        // --- Set Scene ---
        scene.add( grid,
                   axes,
            );

        // --- Window Resizing ---
        const resizer = new Resizer( container, camera, renderer );
    }

    async init() {

    }

    // --- Scene Rendering ---
    render() {
        renderer.render( scene, camera );
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

/**
 * Step 1: Add textured lamp to scene, animate when needed
 */

export { World };