// Systems
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { createControls } from "./systems/controls";
import { Loop } from './systems/Loop.js';

// Components
import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createGridHelper } from "./components/helpers";
import { loadLamp } from './components/Lamp/lamp';
import { cAmbLight } from './components/lights';
import { makeTable } from './components/Room/geometries';

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
        const ambLight = cAmbLight( '#ebaf8d' );
        const table = makeTable();

        // --- Lamp Setup ---
        this.lamp = null;
            loadLamp(( lamp ) => {
                this.lamp = lamp;

                console.log( 'Lamp received by World:', this.lamp );

                scene.add( this.lamp );
            });


        // --- OrbitControls ---
        controls = createControls( camera, renderer.domElement );

        // --- Set Scene ---
        scene.add(  grid,
                    axes,
                    ambLight,
                    table,
            );

        // --- Window Resizing ---
        const resizer = new Resizer( container, camera, renderer );
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