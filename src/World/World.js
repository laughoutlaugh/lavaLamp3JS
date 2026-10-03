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
import { cAmbLight, cSpotLight, cPointLight } from './components/lights';
import { loadScene } from './components/Room/geometries';

//import { makeTable, makeRoom } from './components/Room/geometries';

import { SpotLight, PointLight } from 'three';

// module scoped parametersW
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

        // --- Lights ---
        const ambLight = cAmbLight( '#ebaf8d' );
        const spotLight = cSpotLight( '#ebaf8d', 50 );
        spotLight.position.set( 1, 1.75, -1 );
        const pointLight = new PointLight( '#ebaf8d', 50 );
        pointLight.position.set( -3, 6, -4 );

        // --- Lamp Setup ---
        let lavaLamp = null;
        loadLamp(( lamp ) => {
            lavaLamp = lamp;

            console.log( 'Lamp received by World:', lavaLamp, lavaLamp.position );

            scene.add( lavaLamp );
        });

        let sceneMesh = null;
        loadScene(( sMesh ) => {
            sceneMesh = sMesh;

            console.log( 'Scene received by World:', sceneMesh );

            scene.add( sceneMesh );
        });


        // --- OrbitControls ---
        controls = createControls( camera, renderer.domElement );

        // --- Set Scene ---
        scene.add(  //ambLight,
                    pointLight,
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

export { World };