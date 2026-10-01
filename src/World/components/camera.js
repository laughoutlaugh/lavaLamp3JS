import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        50, // fov
        window.innerWidth / window.innerHeight, // aspect ratio (dummy)
        0.1, // near clipping plain ( 10 cm )
        100, // far clipping plain ( 100 m )
    );

    // move camera back
    camera.position.set( 1, 2, 1 );

    return camera;
}

export { createCamera };