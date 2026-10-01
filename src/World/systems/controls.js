import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Vector3 } from 'three';

function createControls( camera, canvas, target ){
    const controls = new OrbitControls( camera, canvas );

    controls.enableDamping = true;              // add inertia to movement
    controls.dampingFactor = 1.5;               // amount of inertia
    controls.minDistance = 1;                   // closest zoom in
    controls.maxDistance = 10;                  // furthest zoom out
    controls.maxPolarAngle = Math.PI/2;         // lowest rotation down
    controls.target.set( -0.9, 2.3, 0.4 );    // target of controls
    controls.update();

    controls.tick = () => {
        controls.update();
    }

    return controls;
}

export { createControls };