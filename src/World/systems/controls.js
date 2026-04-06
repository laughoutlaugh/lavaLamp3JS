import { OrbitControls } from 'three';
import { Vector3 } from 'three';

function createControls( camera, canvas ){
    const controls = new OrbitControls( camera, canvas );

    controls.enableDamping = true; // add inertia to movement
    controls.dampingFactor = 1.5;
    controls.enablePan = false;

    controls.tick = () => {
        controls.update();
    }

    return controls;
}

export { createControls };