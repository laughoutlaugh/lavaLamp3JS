// Systems
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { createControls } from "./systems/controls";
import { Loop } from './systems/Loop.js';
import { DOF } from "./systems/DOF";

// Components
import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createGridHelper } from "./components/helpers";
import { cAmbLight, cSpotLight, cPointLight } from './components/lights';
import { loadScene } from './components/Room/geometries';
import { Lamp } from "./components/Lamp/Lamp";

import { SpotLight, PointLight } from 'three';

// module scoped parametersW
let camera, renderer, scene, controls, loop, bPass;

class World {
    // create instance of World app
    constructor( container ) {
        // --- Infrastructure ---
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append( renderer.domElement ); // add canvas to container
        loop = new Loop( camera, scene, renderer );

        //bPass = new DOF( scene, camera, renderer );
        //loop.updatables.push( bPass );


        // --- Entities ---
        const { grid, axes } = createGridHelper();

        // --- Lights ---
        const ambLight = cAmbLight( '#ebaf8d' );
        const pointLight = new PointLight( '#ebaf8d', 50 );
        pointLight.position.set( -3, 6, -4 );
        pointLight.castShadow = true;

        // --- Lamp Setup ---

        let sceneMesh = null;
        loadScene(( sMesh ) => {
            sceneMesh = sMesh;

            console.log( 'Scene received by World:', sceneMesh );

            scene.add( sceneMesh );
        });

        const lavaLamp = new Lamp( true, loop );

        // --- OrbitControls ---
        controls = createControls( camera, renderer.domElement );

        // --- Set Scene ---
        scene.add(  ambLight,
                    pointLight,
                    lavaLamp,
            );

        console.log( loop.updatables );

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