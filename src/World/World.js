// Systems
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { createControls } from "./systems/controls";

// Components
import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";

// module scoped parameters
let camera, renderer, scene, controls;

class World {
    // create instance of World app
    constructor( container ) {
        // --- Infrastructure ---
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append( renderer.domElement ); // add canvas to container
    }
}