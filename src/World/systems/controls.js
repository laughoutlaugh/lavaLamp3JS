import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Vector3 } from 'three';

function createControls( camera, canvas, target ){
    const controls = new OrbitControls( camera, canvas );

    controls.enableDamping = true;              // add inertia to movement
    controls.dampingFactor = 1.5;               // amount of inertia
    controls.minDistance = 0.5;                   // closest zoom in
    controls.maxDistance = 2.09;                  // furthest zoom out
    controls.maxPolarAngle = Math.PI/2;         // lowest rotation down
    controls.target.set( -1.32, 2.3, 0.06 );    // target of controls
    controls.update();

    controls.tick = () => {
        controls.update();
    }

    return controls;
}

export { createControls };